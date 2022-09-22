import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  data:{
    "yourTags":[
      {title:"USA",active:false},{title:"India",active:false},
      {title:"Canada",active:false},{title:"Bhutan",active:false},
      {title:"Nepal",active:true}
    ],
    "popularTags":[
      {title:"USA",active:false},{title:"India",active:false},
      {title:"Canada",active:false},{title:"Bhutan",active:false},
      {title:"Nepal",active:true}
    ],
  }
}


export const tagsMouMasterSlice = createSlice({
  name: 'tagsMouMaster',
  initialState,
  reducers: {
    activateYourTagChip : (state,payload) => {
      console.log(payload)
    },
    deleteYourTagChip : (state,payload) => {
      console.log(payload)
    },
    addYourTagChip : (state,payload) => {
      console.log(payload)
    },
    // setRedirectFunction : (state,payload) => {
    //   console.log("setRedirectFunction payload ---> ",payload?.payload?.redirectTo)
    //   state.data.redirectTo = payload?.payload?.redirectTo
    // },
  },
})

export default tagsMouMasterSlice.reducer
// export {getAllUniversityReducer}
export const {activateYourTagChip,deleteYourTagChip,addYourTagChip} = tagsMouMasterSlice.actions