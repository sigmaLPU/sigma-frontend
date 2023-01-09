import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {normalize} from './normalize'

// import {GET_SINGLE_UNIVERSITY_URL,GET_SINGLE_UNIVERSITY_CONTACT_URL} from '../constants'

const initialState = {
}

const getRequestReducer = createAsyncThunk('getRequestAsync/getRequestAsyncReducer',
    async (data)=>{
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
    });
    builder.addCase(getRequestReducer.pending, (state, { payload }) => {
    });
    builder.addCase(getRequestReducer.rejected, (state, { payload }) => {
    });

  },
})

export default getRequestSlice.reducer
export {getRequestReducer}