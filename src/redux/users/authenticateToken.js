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
      return axios.get("https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/user/profile",{
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
    });
    builder.addCase(authenticateTokenReducer.pending, (state, { payload }) => {
    });
    builder.addCase(authenticateTokenReducer.rejected, (state, { payload }) => {
    });
  },
})

export default authenticateToken.reducer
export {authenticateTokenReducer}