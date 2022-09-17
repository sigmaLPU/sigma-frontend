import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

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
    console.log("Fetching university contact data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/contact/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

// adding data
const universityContactAddReducer = createAsyncThunk('universityContact/universityAddContactReducer',
  async (data)=>{
    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/contact/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };

    console.log("Adding university contact data ",data?.data)
    return axios(config)
  }
)



export const universityContactSlice = createSlice({
  name: 'getSingleUniversityContact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityContactReducer.fulfilled, (state, { payload }) => {
      console.log("university contact fulfilled payload",payload)
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
            temp2["img"] = obj?.img ? obj?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
            ids.push(obj?._id)
            temp.push(temp2)
          }

          state.data.data = {data:temp,ids:ids}
        }else{
          state.data.message = "Something wrong"
        }      
    });

    builder.addCase(universityContactReducer.pending, (state, { payload }) => {
      console.log("university contact pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactReducer.rejected, (state, { payload }) => {
      console.log("university contact rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityContactAddReducer.fulfilled, (state, { payload }) => {
      console.log("university contact add fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      console.log(payload)
      if(payload?.data?.universityContact){
        var temp = {}
        temp["name"] = payload?.data?.universityContact?.name ? payload?.data?.universityContact?.name : "Not available";
        temp["mail"] = payload?.data?.universityContact?.email ? payload?.data?.universityContact?.email : "Not available";
        temp["mobile"] = payload?.data?.universityContact?.phone ? payload?.data?.universityContact?.phone : "Not available";
        temp["img"] = payload?.data?.universityContact?.img ? payload?.data?.universityContact?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
        console.log("data added ----> ",temp)      
        state.data.data.data.push(temp)
        state.data.data.ids.push(payload?.data?.universityContact?._id ? payload?.data?.universityContact?._id : 0)
      }
    });

    builder.addCase(universityContactAddReducer.pending, (state, { payload }) => {
      console.log("university contact add pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactAddReducer.rejected, (state, { payload }) => {
      console.log("university contact add  rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityContactSlice.reducer
export {universityContactReducer,universityContactAddReducer}