import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = ""

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
      return axios.post("https://sigmalpu.herokuapp.com/api/v2/user/login",data,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

export const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login : (state,action) => {
      const url = "https://sigmalpu.herokuapp.com/api/v2/user/login"
      axios.post(url, action.payload , {
          headers: {
          'Content-Type': 'application/json'
          }
        }
      ).then((resp)=>{
        localStorage.setItem('auth', true)
        localStorage.setItem('name', resp?.data?.name);
        localStorage.setItem('email', resp?.data?.email);
        localStorage.setItem('regNo', resp?.data?.regNo);
        localStorage.setItem('token', resp?.data?.token);

        state.data.loading = false
        state.data.isAuthenticated = true
            
        console.log(resp)
        return "done"
      }).catch((error)=>{
        state.data.loading = true
        state.data.isAuthenticated = false

        localStorage.setItem('auth', false)
        return "error"
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authUserReducer.fulfilled, (state, { payload }) => {
      console.log("from extraReducers")
      console.log("payload in extraReducers",payload)
      localStorage.setItem('auth', true)
      localStorage.setItem('name', payload?.data?.name);
      localStorage.setItem('email', payload?.data?.email);
      localStorage.setItem('regNo', payload?.data?.regNo);
      localStorage.setItem('token', payload?.data?.token);
      state.data = {
        isAuthenticated : true,
        loading : false,
        payload : payload,
        error : null,
      }
    });
    builder.addCase(authUserReducer.pending, (state, { payload }) => {
      console.log("from extraReducers pending")
      console.log("payload in extraReducers",payload)
      localStorage.setItem('auth', false)
      localStorage.setItem('name', "");
      localStorage.setItem('email', "");
      localStorage.setItem('regNo', "");
      localStorage.setItem('token', "");
      state.data = {
        isAuthenticated : false,
        loading : true,
        payload : payload,
        error : null,
      }
    });
    builder.addCase(authUserReducer.rejected, (state, { payload }) => {
      console.log("from extraReducers rejected")
      console.log("payload in extraReducers",payload)
      localStorage.setItem('auth', false)
      localStorage.setItem('name', "");
      localStorage.setItem('email', "");
      localStorage.setItem('regNo', "");
      localStorage.setItem('token', "");
      state.data = {
        isAuthenticated : false,
        loading : false,
        payload : payload,
        error : true,
      }
    });
  },
})

export const { login }  = authUserSlice.actions

export default authUserSlice.reducer
export {authUserReducer}