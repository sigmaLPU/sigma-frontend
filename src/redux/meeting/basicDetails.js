import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  data:{
    loading:true,
    message:"Loading",
    data:{}
  }
}

const getMeetingsReducer = createAsyncThunk('basicDetails/getMeetingsReducer',
    async (data)=>{
      return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/single/${data?.id}`,{
          headers: {
            'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
          }})
    }
)

const meetingBasicDetailsUpdateReducer = createAsyncThunk('basicDetails/meetingBasicDetailsUpdateReducer',
  async (data)=>{
    return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/single/${data?.id}`,data?.data,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)

export const getMeetingsSlice = createSlice({
  name: 'basicDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeetingsReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.meeting
      state.data.data = data
      state.data.message = "Fulfilled"
      state.data.loading = false
    });
    builder.addCase(getMeetingsReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    builder.addCase(getMeetingsReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });

    builder.addCase(meetingBasicDetailsUpdateReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.meeting
      state.data.data = data
      state.data.message = "Fulfilled"
      state.data.loading = false
    });
    builder.addCase(meetingBasicDetailsUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    builder.addCase(meetingBasicDetailsUpdateReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });

  },
})

export default getMeetingsSlice.reducer
export {getMeetingsReducer,meetingBasicDetailsUpdateReducer}
// export const {setRedirectFunctionMeetings,updateViewDetailsMeetings} = getAllMeetingsSlice.actions