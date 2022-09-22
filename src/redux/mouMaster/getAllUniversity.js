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
      console.log("Sending request to backend to get all university data")
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
      console.log("setRedirectFunction payload ---> ",payload?.payload?.redirectTo)
      state.data.redirectTo = payload?.payload?.redirectTo
    },
    updateViewDetails : (state) =>{
      if(state.data.redirectTo){
        var row = state.data.data.rows
        for(const r of row){
          r["Details"] = <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>state.data.redirectTo(r["Details"])}>Details</div>
        }
        console.log(row)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUniversityReducer.fulfilled, (state, { payload }) => {
      console.log("university list loading (fulfilled)",payload)
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
      
        console.log("master reducer ---> ",r)
      }
    });
    builder.addCase(getAllUniversityReducer.pending, (state, { payload }) => {
      console.log("university list loading (pending)",payload)
    });
    builder.addCase(getAllUniversityReducer.rejected, (state, { payload }) => {
      console.log("university list loading (failed)",payload)
    });
  },
})

export default getAllUniversitySlice.reducer
export {getAllUniversityReducer}
export const {setRedirectFunction,updateViewDetails} = getAllUniversitySlice.actions