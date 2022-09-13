import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {FORGET_USER_PASSWORD} from '../../constants'

const initialState = {
  data:{
    status:null    
  }
}

const forgetPasswordReducer = createAsyncThunk('forgetPassword/forgetPasswordReducer',
    async (data)=>{
      console.log("Sending request to backend for forgetPassword mail")
      return axios.post(FORGET_USER_PASSWORD,data,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

export const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgetPasswordReducer.fulfilled, (state, { payload }) => {
      console.log("forget mail sent with given cred (fulfilled)",payload)
      state.data.status = true
    });
    builder.addCase(forgetPasswordReducer.pending, (state, { payload }) => {
      console.log("forget mail with given cred (pending)",payload)
      state.data.status = null
    });
    builder.addCase(forgetPasswordReducer.rejected, (state, { payload }) => {
      console.log("forget mail with given cred (failed)",payload)
      state.data.status = false
    });
  },
})

export default forgetPasswordSlice.reducer
export {forgetPasswordReducer}