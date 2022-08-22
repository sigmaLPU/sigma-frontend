import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {PROFILE_URL} from '../constants'

const initialState = {
  data:{
    isAuthenticated : false,
    loading : true,
    payload : null,
    error : null,
  }
}

const authenticateTokenReducer = createAsyncThunk('auth/authUserReducer',
    async (data)=>{
      console.log("Validating token with backend")
      // console.log("Authorization: Bearer "+localStorage.getItem('token'))
      return axios.get("https://sigmalpu.herokuapp.com/api/v2/user/profile",{
        headers:{
          Authorization : "Bearer "+localStorage.getItem('token')
        }
      })
    }
  )

export const authenticateToken = createSlice({
  name: 'authToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateTokenReducer.fulfilled, (state, { payload }) => {
      console.log("Validating token (fulfilled)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(authenticateTokenReducer.pending, (state, { payload }) => {
      console.log("Validating token (pending)")
      // console.log("payload in extraReducers",payload)
    });
    builder.addCase(authenticateTokenReducer.rejected, (state, { payload }) => {
      console.log("Validating token (rejected)")
      // console.log("payload in extraReducers",payload)
    });
  },
})

export default authenticateToken.reducer
export {authenticateTokenReducer}