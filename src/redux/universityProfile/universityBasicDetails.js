import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{},
  }
}

const universityBasicDetailsReducer = createAsyncThunk('universityBasicDetails/universityBasicDetailsReducer',
  async (data)=>{
    console.log("Fetching university basic data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

const universityBasicDetailsUpdateReducer = createAsyncThunk('universityBasicDetails/universityBasicDetailsUpdateReducer',
  async (data)=>{
    console.log("Update university basic data")
    return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)



export const universityBasicDetailsSlice = createSlice({
  name: 'getSingleUniversityBasicDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(universityBasicDetailsReducer.fulfilled, (state, { payload }) => {
      console.log("university basic fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      state.data.data = {
        "name":payload?.data?.university?.name ? payload?.data?.university?.name : "Not available",
        "country":payload?.data?.university?.country ? payload?.data?.university?.country : "Not available",
        "address":(payload?.data?.university?.country+", "+payload?.data?.university?.city) ? payload?.data?.university?.country+", "+payload?.data?.university?.city : "Not available",
        "website":payload?.data?.university?.website ? payload?.data?.university?.website : "Not available",
      }
    });
    builder.addCase(universityBasicDetailsReducer.pending, (state, { payload }) => {
      console.log("university basic pending payload",payload)
      state.data.message = "Loading"
      state.data.data = {
        "message":"please wait (loading)"
      }
    });
    builder.addCase(universityBasicDetailsReducer.rejected, (state, { payload }) => {
      console.log("university basic rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
      state.data.data = {
        "message":"unable to fetch data"
      }
    });


    builder.addCase(universityBasicDetailsUpdateReducer.fulfilled, (state, { payload }) => {
      console.log("university basic Update fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      state.data.data = {
        "name":payload?.data?.university?.name ? payload?.data?.university?.name : "Not available",
        "country":payload?.data?.university?.country ? payload?.data?.university?.country : "Not available",
        "address":(payload?.data?.university?.country+", "+payload?.data?.university?.city) ? payload?.data?.university?.country+", "+payload?.data?.university?.city : "Not available",
        "website":payload?.data?.university?.website ? payload?.data?.university?.website : "Not available",
      }
    });
    builder.addCase(universityBasicDetailsUpdateReducer.pending, (state, { payload }) => {
      console.log("university basic Update pending payload",payload)
      state.data.message = "Loading"
      state.data.data = {
        "message":"please wait (loading)"
      }
    });
    builder.addCase(universityBasicDetailsUpdateReducer.rejected, (state, { payload }) => {
      console.log("university basic Update rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
      state.data.data = {
        "message":"unable to fetch data"
      }
    });

  },
})

export default universityBasicDetailsSlice.reducer
export {universityBasicDetailsReducer,universityBasicDetailsUpdateReducer}