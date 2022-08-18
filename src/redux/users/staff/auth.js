import { createSlice } from '@reduxjs/toolkit'

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
    login : (state) => {
    	console.log("Login Slice reducers called")
      state.initialState = {...state.initialState,loading:false}
    }
  }
})

export const { login }  = authUserSlice.actions

export default authUserSlice.reducer