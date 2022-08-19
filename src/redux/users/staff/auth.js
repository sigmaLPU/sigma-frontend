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
    login : (state) => {
      
      const email = "animesh.shrivatri2002@gmail.com"
      const password = "123456"

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      axios.post("http://localhost:5000/api/v2/faculty/login",{email:email,password:password},config).then((resp)=>{
        console.log(resp)
      }).catch((error)=>{
        console.log("erorr")
        console.log(error)
      })
    	console.log("Login Slice reducers called")
      state.initialState = {...state.initialState,loading:false}
    }
  }
})

export const { login }  = authUserSlice.actions

export default authUserSlice.reducer