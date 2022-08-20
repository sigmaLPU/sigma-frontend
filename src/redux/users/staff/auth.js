import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


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
      console.log("From toolkit")
      console.log(action)
    }
  }
})

export const { login }  = authUserSlice.actions

export default authUserSlice.reducer