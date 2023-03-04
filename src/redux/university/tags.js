import { createSlice } from '@reduxjs/toolkit'

import {normalize} from '../normalize'

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
    },
    deleteYourTagChip : (state,payload) => {
    },
    addYourTagChip : (state,payload) => {
    },
  },
})

export default tagsMouMasterSlice.reducer
export const {activateYourTagChip,deleteYourTagChip,addYourTagChip} = tagsMouMasterSlice.actions