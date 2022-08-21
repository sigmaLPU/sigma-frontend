import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = ""

const initialState = {
  isAuthenticated : false,
  loading : true,
  payload : null,
  error : null,
}

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
        
        state.isAuthenticated = true
        state.loading = false
        state.payload = resp?.data

        console.log(resp)
        return state
      }).catch((error)=>{
        state.error = error?.response?.data?.error
        console.log("error",error)
      })
    }
  }
})

export const { login }  = authUserSlice.actions

export default authUserSlice.reducer