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
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/update/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

const universityRecentUpdateAddReducer = createAsyncThunk('universityRecentUpdate/universityRecentUpdateAddReducer',
  async (data)=>{
    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/update/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };

    return axios(config)
  }
)


const universityRecentUpdateUpdateReducer = createAsyncThunk('universityRecentUpdate/universityRecentUpdateUpdateReducer',
  async (data)=>{
    return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/update/${data?.id}/update`,data?.data,{
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
      state.data.message = "Fulfilled"
      state.data.loading = false
      console.log("recent update data --> ",payload.data) 
      var rData = payload?.data?.updates
      if(rData){
        var ids = []
        var data = []
        for(var obj of rData){
          ids.push(obj?._id)
          var temp = {}
          temp["title"] = obj?.value
          temp["id"] = obj?._id
          temp["date"] = toDate(obj?.createdAt)
          data.push(temp)
        }
        state.data.data = {data:data,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }
    });

    builder.addCase(universityRecentUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityRecentUpdateReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityRecentUpdateAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
    
      var obj = payload?.data?.universityUpdate

      var temp = {}
      temp["title"] = obj?.value
      temp["_id"] = obj?._id
      temp["date"] = toDate(obj?.createdAt)

      state.data.data.data = [temp].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityRecentUpdateAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityRecentUpdateAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });




    builder.addCase(universityRecentUpdateUpdateReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
    
      var obj = payload?.data?.universityUpdate

      var temp = {}
      temp["title"] = obj?.value
      temp["_id"] = obj?._id
      temp["date"] = toDate(obj?.createdAt)

      var id = temp["_id"]
      var index = -1
      var ids = state.data.data.ids
      for(var i=0;i<ids.length;i++){
        if(ids[i]==id){
          index = i
        }
      }
      if(index!=-1){
        state.data.data.data[index] = temp        
      }

    });

    builder.addCase(universityRecentUpdateUpdateReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityRecentUpdateUpdateReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });



  },
})

export default universityRecentUpdateSlice.reducer
export {universityRecentUpdateReducer,universityRecentUpdateAddReducer,universityRecentUpdateUpdateReducer}