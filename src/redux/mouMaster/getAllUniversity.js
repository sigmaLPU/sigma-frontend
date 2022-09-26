import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {GET_ALL_UNIVERSITY_URL} from '../constants'

function redirectTo(url){
  window.loaction.href = url
}

const initialState = {
  data:{
    loading:true,
    redirectTo:null,
    message:"Loading",
    data:{
      rows:[],
      column:[],
      pagenation_id:null,
    }
  }
}

const getAllUniversityReducer = createAsyncThunk('getAllUniverity/getAllUniversityReducer',
    async (data)=>{
      return axios.get(GET_ALL_UNIVERSITY_URL,{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

export const getAllUniversitySlice = createSlice({
  name: 'getAllUniversity',
  initialState,
  reducers: {
    setRedirectFunction : (state,payload) => {
      state.data.redirectTo = payload?.payload?.redirectTo
    },
    updateViewDetails : (state) =>{
      if(state.data.redirectTo){
        var row = state.data.data.rows
        for(const r of row){
          r["Details"] = <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>state.data.redirectTo(r["Details"])}>Details</div>
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUniversityReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.universities
      if(!data){
        state.data.message="Something went wrong"
      }else if(data.length===0){
        state.data.message="Sorry data is not here"
      }else{
        state.data.message="Fulfilled"
        var r = []
        for(var i=0;i<data.length;i++){
          var x = data[i]
          var obj = {}
          obj["Name of University"] = x?.name ? x?.name : "---"
          obj["Country"] = x?.country ? x?.country : "---"
          obj["Meetings"] =  x?.meeting ? x?.meeting : "---"
          obj["Contact Person"] =  x?.contact ? x?.contact[0] : "---"
          obj["Agreement"] = x?.agreement ? x?.agreement : "---"
          obj["Details"] = x?._id;    
          r.push(obj)
        }
        state.data.data = {rows:r,column:["Name of University","Country","Meetings","Contact Person","Agreement","Details"]}
      
      }
    });
    builder.addCase(getAllUniversityReducer.pending, (state, { payload }) => {
    });
    builder.addCase(getAllUniversityReducer.rejected, (state, { payload }) => {
    });
  },
})

export default getAllUniversitySlice.reducer
export {getAllUniversityReducer}
export const {setRedirectFunction,updateViewDetails} = getAllUniversitySlice.actions