import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      data:[],
      ids:[]
    },
    resp:{},
  }
}

const universityMeetingReducer = createAsyncThunk('universityMeeting/universityMeetingReducer',
  async (data)=>{
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/university/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)


const universityMeetingAddReducer = createAsyncThunk('universityMeetingAdd/universityMeetingAddReducer',
  async (data)=>{
    
    data["data"]["university"] = data?.id

    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/create`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };
    return axios(config)
  }
)


const universityMeetingUpdateReducer = createAsyncThunk('universityMeeting/universityMeetingUpdateReducer',
  async (data)=>{
    return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)







export const universityMeetingSlice = createSlice({
  name: 'getSingleUniversityMeeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityMeetingReducer.fulfilled, (state, { payload }) => {
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
          temp2["id"] = obj?._id
          temp2["createdBy"] = obj?.createdBy
          temp2["agenda"] = obj?.agenda
          temp2["link"] = obj?.link
          temp2["university"] = obj?.university
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
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMeetingReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });





    builder.addCase(universityMeetingAddReducer.fulfilled, (state, { payload }) => {
    
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.meeting
      
      var temp2 = {}
      temp2["title"] = obj?.title
      temp2["meetingTime"] = obj?.meetingTime
      temp2["id"] = obj?._id
      temp2["createdBy"] = obj?.createdBy
      temp2["agenda"] = obj?.agenda
      temp2["link"] = obj?.link
      temp2["university"] = obj?.university

      console.log("ADDED ",temp2)

      state.data.data.data = [temp2].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityMeetingAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
      state.data.resp = payload
    });
    
    builder.addCase(universityMeetingAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
      state.data.resp = payload
    });



    builder.addCase(universityMeetingUpdateReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false

      var obj = payload?.data?.universityMeeting
      var temp2 = {}
      temp2["title"] = obj?.title
      temp2["meetingTime"] = obj?.meetingTime
      temp2["id"] = obj?._id
      temp2["createdBy"] = obj?.createdBy
      temp2["agenda"] = obj?.agenda
      temp2["link"] = obj?.link
      temp2["university"] = obj?.university

      var id = temp2["id"]
      var index = -1
      var ids = state.data.data.ids
      for(var i=0;i<ids.length;i++){
        if(ids[i]==id){
          index = i
        }
      }
      if(index!=-1){
        state.data.data.data[index] = temp2        
      }

    });

    builder.addCase(universityMeetingUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMeetingUpdateReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });



  },
})

export default universityMeetingSlice.reducer
export {universityMeetingReducer,universityMeetingAddReducer,universityMeetingUpdateReducer}