import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {GET_ALL_UNIVERSITY_URL} from '../constants'

const initialState = {
}

const getAllUniversityReducer = createAsyncThunk('getAllUniverity/getAllUniversityReducer',
    async (data)=>{
      console.log("Sending request to backend to get all university data")
      return axios.get(GET_ALL_UNIVERSITY_URL,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

export const getAllUniversitySlice = createSlice({
  name: 'getAllUniversity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUniversityReducer.fulfilled, (state, { payload }) => {
      console.log("university list loading (fulfilled)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(getAllUniversityReducer.pending, (state, { payload }) => {
      console.log("university list loading (pending)")
    });
    builder.addCase(getAllUniversityReducer.rejected, (state, { payload }) => {
      console.log("university list loading (failed)")
    });
  },
})

export default getAllUniversitySlice.reducer
export {getAllUniversityReducer}