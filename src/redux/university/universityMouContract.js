import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import {normalize} from '../normalize'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      "data":[],
      "ids":[]
    }
  }
}

const universityMouContractReducer = createAsyncThunk('universityMouContract/universityMouContractReducer',
  async (data)=>{
    data = normalize(data)
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/mou/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)


const universityMouContractAddReducer = createAsyncThunk('universityMouContract/universityMouContractAddReducer',
  async (data)=>{

    data = normalize(data)
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/mou/${data?.id}/add`,
      headers: { 
        'Content-Type': 'multipart/form-data',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };
    return axios(config)
  }
)


const universityMouContractUpdateReducer = createAsyncThunk('universityMouContract/universityMouContractUpdateReducer',
  async (data)=>{
    data = normalize(data)
    return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/mou/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)





const universityMouContractSlice = createSlice({
  name: 'universityMouContract',
  initialState,
  reducers:{
    setMouContractSliceLoading : (state,payload) => {
      state.data.loading = payload?.payload?.loading
      if(payload?.payload?.message && payload?.payload?.message!==""){
        state.data.message = payload?.payload?.message
      }
    },
  },
  extraReducers : (builder) => {

    // get
    builder.addCase(universityMouContractReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.mous  
    
      if(data){
        var arr = []
        var ids = []
        for(const obj of data){
          var temp = {}
          temp["type"] = obj?.type
          temp["title"] = obj?.title
          temp["id"] = obj?._id
          temp["startDate"] = obj?.startDate
          temp["endDate"] = obj?.endDate
          temp["file"] = obj?.file?.f_url
          temp["file_k"] = obj?.file?.f_key
          temp["university"] = obj?.university?._id

          arr.push(temp)
          ids.push(obj?._id)
        }
        if(arr.length===0){
          state.data.message = "No record found"
        }
        state.data.data = {data:arr,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }

    });

    builder.addCase(universityMouContractReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    // add
    builder.addCase(universityMouContractAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.universityMou
      
      var temp = {}
      temp["type"] = obj?.type
      temp["title"] = obj?.title
      temp["id"] = obj?._id
      temp["startDate"] = obj?.startDate
      temp["endDate"] = obj?.endDate
      temp["file"] = obj?.file?.f_url
      temp["file_k"] = obj?.file?.f_key
      temp["university"] = obj?.university?._id

      state.data.data.data = [temp].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityMouContractAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    // update
    builder.addCase(universityMouContractUpdateReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false

      var obj = payload?.data?.universityMou
      var temp = {}
      temp["type"] = obj?.type
      temp["title"] = obj?.title
      temp["id"] = obj?._id
      temp["startDate"] = obj?.startDate
      temp["endDate"] = obj?.endDate
      temp["file"] = obj?.file
      temp["file_k"] = obj?.file_k
      temp["university"] = obj?.university?._id

      var id = obj?._id
      var index = -1
      var ids = state.data.data.ids

      for(var i=0;i<ids.length;i++){
        if(ids[i]==id){
          index = i
        }
      }
      if(index!=-1){
        state.data.data.data[index] = temp        
      }else{
      }

    });

    builder.addCase(universityMouContractUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractUpdateReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });

  }
})

export default universityMouContractSlice.reducer
export {universityMouContractReducer,universityMouContractAddReducer,universityMouContractUpdateReducer}
export const {setMouContractSliceLoading} = universityMouContractSlice.actions