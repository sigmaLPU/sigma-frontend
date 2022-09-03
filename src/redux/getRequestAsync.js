import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// import {GET_SINGLE_UNIVERSITY_URL,GET_SINGLE_UNIVERSITY_CONTACT_URL} from '../constants'

const initialState = {
}

const getRequestReducer = createAsyncThunk('getRequestAsync/getRequestAsyncReducer',
    async (data)=>{
      console.log("Sending request to backend to get single university data")
      return axios.get(`${data?.url}`,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )


export const getRequestSlice = createSlice({
  name: 'getRequest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequestReducer.fulfilled, (state, { payload }) => {
      console.log("get request (fulfilled)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(getRequestReducer.pending, (state, { payload }) => {
      console.log("get request (pending)")
    });
    builder.addCase(getRequestReducer.rejected, (state, { payload }) => {
      console.log("get request (failed)")
    });

  },
})

export default getRequestSlice.reducer
export {getRequestReducer}