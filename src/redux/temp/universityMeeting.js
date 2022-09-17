import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{},
  }
}

const universityMeetingReducer = createAsyncThunk('universityMeeting/universityMeetingReducer',
  async (data)=>{
    console.log("Fetching university Meeting data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/meeting/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)


const universityMeetingAddReducer = createAsyncThunk('universityMeetingAdd/universityMeetingAddReducer',
  async (data)=>{
    console.log("Adding university Meeting data",data)

    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/meeting/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };
    console.log(config)
    return axios(config)
  }
)

export const universityMeetingSlice = createSlice({
  name: 'getSingleUniversityMeeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityMeetingReducer.fulfilled, (state, { payload }) => {
      console.log("university Meeting fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.meetings
      
      if(data){
        var temp = {}
        var arr = []
        var ids = []
        for(const obj of data){
          var temp2 = {}
          temp2["title"] = obj?.title
          temp2["meetingTime"] = obj?.meetingTime
          arr.push(temp2)
          ids.push(obj?._id)
        }
        if(arr.length===0){
          state.data.message = "No record found"
        }
        state.data.data = {data:arr,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }
    
    });

    builder.addCase(universityMeetingReducer.pending, (state, { payload }) => {
      console.log("university Meeting pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMeetingReducer.rejected, (state, { payload }) => {
      console.log("university Meeting rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });





    builder.addCase(universityMeetingAddReducer.fulfilled, (state, { payload }) => {
      console.log("university Meeting add fulfilled payload",payload)
    });

    builder.addCase(universityMeetingAddReducer.pending, (state, { payload }) => {
      console.log("university Meeting add  pending payload",payload)
    });
    
    builder.addCase(universityMeetingAddReducer.rejected, (state, { payload }) => {
      console.log("university Meeting add  rejected payload",payload)
    });

  },
})

export default universityMeetingSlice.reducer
export {universityMeetingReducer,universityMeetingAddReducer}