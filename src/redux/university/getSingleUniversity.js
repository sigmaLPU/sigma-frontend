import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {GET_SINGLE_UNIVERSITY_URL,GET_SINGLE_UNIVERSITY_CONTACT_URL} from '../constants'

const initialState = {
}

const getSingleUniversityReducer = createAsyncThunk('getSingleUniverity/getSingleUniversityReducer',
    async (data)=>{
      // console.log("single payload ",data)
      console.log("Sending request to backend to get single university data")
      return axios.get(`${GET_SINGLE_UNIVERSITY_URL}/${data?.id}`,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

const getSingleUniversityContactReducer = createAsyncThunk('getSingleUniverityContact/getSingleUniversityContactReducer',
    async (data)=>{
      console.log("Sending request to backend to get single university data for contact")
      return axios.get(`${GET_SINGLE_UNIVERSITY_CONTACT_URL}/${data?.id}`,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
)





export const getSingleUniversitySlice = createSlice({
  name: 'getSingleUniversity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleUniversityReducer.fulfilled, (state, { payload }) => {
      console.log("university loading (fulfilled)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(getSingleUniversityReducer.pending, (state, { payload }) => {
      console.log("university loading (pending)")
    });
    builder.addCase(getSingleUniversityReducer.rejected, (state, { payload }) => {
      console.log("university loading (failed)")
    });


    builder.addCase(getSingleUniversityContactReducer.fulfilled, (state, { payload }) => {
      console.log("university contact loading (fulfilled)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(getSingleUniversityContactReducer.pending, (state, { payload }) => {
      console.log("university contact loading (pending)")
    });
    builder.addCase(getSingleUniversityContactReducer.rejected, (state, { payload }) => {
      console.log("university contact loading (failed)")
    });
  },
})

export default getSingleUniversitySlice.reducer
export {getSingleUniversityReducer,getSingleUniversityContactReducer}