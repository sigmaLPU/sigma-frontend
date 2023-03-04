import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {LOGIN_URL} from '../constants'

import {normalize} from '../normalize'


const initialState = {
  data:{
    isAuthenticated : false,
    loading : true,
    payload : null,
    error : null,
  }
}

const authUserReducer = createAsyncThunk('auth/authUserReducer',
    async (data)=>{
    // data = normalize(data)
      return axios.post(LOGIN_URL,data,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

export const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUserReducer.fulfilled, (state, { payload }) => {
      localStorage.setItem('auth', true)
      localStorage.setItem('name', payload?.data?.name);
      localStorage.setItem('email', payload?.data?.email);
      localStorage.setItem('regNo', payload?.data?.regNo);
      localStorage.setItem('token', payload?.data?.token);
      localStorage.setItem('from', "fulfilled");
      state.data = {
        isAuthenticated : true,
        loading : false,
        payload : payload,
        error : null,
      }
    });
    builder.addCase(authUserReducer.pending, (state, { payload }) => {
      localStorage.setItem('auth', false)
      localStorage.setItem('from', "pending");
      state.data = {
        isAuthenticated : false,
        loading : true,
        payload : payload,
        error : null,
      }
    });
    builder.addCase(authUserReducer.rejected, (state, { payload }) => {
      localStorage.setItem('auth', false)
      localStorage.setItem('from', "rejected");
      state.data = {
        isAuthenticated : false,
        loading : false,
        payload : payload,
        error : true,
      }
    });
  },
})

export default authUserSlice.reducer
export {authUserReducer}