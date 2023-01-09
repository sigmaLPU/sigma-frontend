import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import {normalize} from '../normalize'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{"data":[],"ids":[]},
  }
}

// fetching data
const universityContactReducer = createAsyncThunk('universityContact/universityContactReducer',
  async (data)=>{
    data = normalize(data)
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/contact/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)

// adding data
const universityContactAddReducer = createAsyncThunk('universityContact/universityAddContactReducer',
  async (data)=>{
    data = normalize(data)
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/contact/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };

    return axios(config)
  }
)

const universityContactUpdateReducer = createAsyncThunk('universityContact/universityContactUpdateReducer',
  async (data)=>{
    data = normalize(data)
    return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/contact/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
          
    }})
  }
)



export const universityContactSlice = createSlice({
  name: 'getSingleUniversityContact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityContactReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false

      var data = payload?.data?.contacts

      if(data){
          var temp = []
          var ids = []
          
          for(const obj of data){
            var temp2 = {}
            temp2["name"] = obj?.name ? obj?.name : "Not available";
            temp2["mobile"] = obj?.phone ? obj?.phone : "Not available";
            temp2["mail"] = obj?.email ? obj?.email : "Not available";
            temp2["id"] = obj?._id ? obj?._id : "Not available";
            temp2["img"] = obj?.img ? obj?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
            temp2["description"] = obj?.description ? obj?.description : "";
            ids.push(obj?._id)
            temp.push(temp2)
          }

          state.data.data = {data:temp,ids:ids}
        }else{
          state.data.message = "Something wrong"
        }      
    });

    builder.addCase(universityContactReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityContactAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      if(payload?.data?.universityContact){
        var temp = {}
        temp["name"] = payload?.data?.universityContact?.name ? payload?.data?.universityContact?.name : "Not available";
        temp["mail"] = payload?.data?.universityContact?.email ? payload?.data?.universityContact?.email : "Not available";
        temp["mobile"] = payload?.data?.universityContact?.phone ? payload?.data?.universityContact?.phone : "Not available";
        temp["id"] = payload?.data?.universityContact?._id ? payload?.data?.universityContact?._id : "Not available";
        temp["img"] = payload?.data?.universityContact?.img ? payload?.data?.universityContact?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
        temp["description"] = payload?.data?.universityContact?.description ? payload?.data?.universityContact?.description : "";
        state.data.data.data.push(temp)
        state.data.data.ids.push(payload?.data?.universityContact?._id ? payload?.data?.universityContact?._id : 0)
      }
    });

    builder.addCase(universityContactAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });



    builder.addCase(universityContactUpdateReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      
      if(payload?.data?.universityContact){
        var temp = {}
        temp["name"] = payload?.data?.universityContact?.name ? payload?.data?.universityContact?.name : "Not available";
        temp["mail"] = payload?.data?.universityContact?.email ? payload?.data?.universityContact?.email : "Not available";
        temp["mobile"] = payload?.data?.universityContact?.phone ? payload?.data?.universityContact?.phone : "Not available";
        temp["id"] = payload?.data?.universityContact?._id ? payload?.data?.universityContact?._id : "Not available";
        temp["img"] = payload?.data?.universityContact?.img ? payload?.data?.universityContact?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
        temp["description"] = payload?.data?.universityContact?.description ? payload?.data?.universityContact?.description : "";    
        
        var id = temp["id"]
        var index = -1
        var ids = state.data.data.ids
        for(var i=0;i<ids.length;i++){
          if(ids[i]==id){
            index = i
          }
        }
        if(index!=-1){
          state.data.data.data[index] = temp     
        }
      }

    });

    builder.addCase(universityContactUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactUpdateReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityContactSlice.reducer
export {universityContactReducer,universityContactAddReducer,universityContactUpdateReducer}