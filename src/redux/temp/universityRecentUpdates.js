import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

function toDate(timestamp){
  const d = new Date( timestamp );
  var date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
  return date
}

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      data:[],
      ids:[], 
    },
  }
}

const universityRecentUpdateReducer = createAsyncThunk('universityRecentUpdate/universityRecentUpdateReducer',
  async (data)=>{
    console.log("Fetching university recent update data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/update/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

export const universityRecentUpdateSlice = createSlice({
  name: 'getSingleUniversityRecentUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityRecentUpdateReducer.fulfilled, (state, { payload }) => {
      console.log("university recent update fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
    
      var rData = payload?.data?.updates
      if(rData){
        var ids = []
        var data = []
        for(var obj of rData){
          ids.push(obj?._id)
          var temp = {}
          temp["title"] = obj?.value
          temp["date"] = toDate(obj?.createdAt)
          data.push(temp)
        }
        state.data.data = {data:data,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }
    });

    builder.addCase(universityRecentUpdateReducer.pending, (state, { payload }) => {
      console.log("university recent update pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityRecentUpdateReducer.rejected, (state, { payload }) => {
      console.log("university recent update rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityRecentUpdateSlice.reducer
export {universityRecentUpdateReducer}