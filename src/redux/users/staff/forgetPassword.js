import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {FORGET_USER_PASSWORD,RESET_PASSWORD} from '../../constants'

const initialState = {
  data:{
    status:null,
    resetStatus:null,
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


const resetPasswordReducer = createAsyncThunk('forgetPassword/resetPasswordReducer',
    async (data)=>{
      console.log("Sending request to backend for reset password",data)
      return axios.put(`${RESET_PASSWORD}/${data?.id}`,{"password":data?.password},{
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
  

    builder.addCase(resetPasswordReducer.fulfilled, (state, { payload }) => {
      console.log("reset password with given cred (fulfilled)",payload)
      state.data.resetStatus = true
    });
    builder.addCase(resetPasswordReducer.pending, (state, { payload }) => {
      console.log("reset password given cred (pending)",payload)
      state.data.resetStatus = null
    });
    builder.addCase(resetPasswordReducer.rejected, (state, { payload }) => {
      console.log("reset password given cred (failed)",payload)
      state.data.resetStatus = false
    });
  

  },
})

export default forgetPasswordSlice.reducer
export {forgetPasswordReducer,resetPasswordReducer}



