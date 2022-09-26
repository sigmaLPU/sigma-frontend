import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

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
    console.log("Fetching university mou contact data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/contact/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)


const universityMouContractAddReducer = createAsyncThunk('universityMouContract/universityMouContractAddReducer',
  async (data)=>{
    console.log("Adding university mou contact data",data)

    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/meeting/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };
    console.log(config)
    return axios(config)
  }
)


const universityMouContractUpdateReducer = createAsyncThunk('universityMouContract/universityMouContractUpdateReducer',
  async (data)=>{
    console.log("Update university mou contact data")
    return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/meeting/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)





const universityMouContractSlice = createSlice({
  name: 'universityMouContract',
  initialState,
  reducers:{},
  extraReducers : (builder) => {

    // get
    builder.addCase(universityMouContractReducer.fulfilled, (state, { payload }) => {
      console.log("university mou fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.meetings
    
    });

    builder.addCase(universityMouContractReducer.pending, (state, { payload }) => {
      console.log("university Mou pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractReducer.rejected, (state, { payload }) => {
      console.log("university mou rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });


    // add
    builder.addCase(universityMouContractAddReducer.fulfilled, (state, { payload }) => {
      console.log("university mou fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.meetings
    
    });

    builder.addCase(universityMouContractAddReducer.pending, (state, { payload }) => {
      console.log("university Mou pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractAddReducer.rejected, (state, { payload }) => {
      console.log("university mou rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });


    // update
    builder.addCase(universityMouContractUpdateReducer.fulfilled, (state, { payload }) => {
      console.log("university mou fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.meetings
    
    });

    builder.addCase(universityMouContractUpdateReducer.pending, (state, { payload }) => {
      console.log("university Mou pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractUpdateReducer.rejected, (state, { payload }) => {
      console.log("university mou rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  }
})

export default universityMouContractSlice.reducer
export {universityMouContractReducer,universityMouContractAddReducer,universityMouContractUpdateReducer}
