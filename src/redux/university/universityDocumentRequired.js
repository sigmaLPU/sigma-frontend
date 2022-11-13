import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

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

const universityDocumentRequiredReducer = createAsyncThunk('universityDocumentRequired/universityDocumentRequiredReducer',
  async (data)=>{
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/extra/documents/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

const universityDocumentRequiredAddReducer = createAsyncThunk('universityDocumentRequired/universityDocumentRequiredAddReducer',
  async (data)=>{
    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/extra/documents/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };

    return axios(config)
  }
)


// const universityRecentUpdateUpdateReducer = createAsyncThunk('universityRecentUpdate/universityRecentUpdateUpdateReducer',
//   async (data)=>{
//     return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/update/${data?.id}/update`,data?.data,{
//         headers: {
//           'Content-Type': 'application/json'
//     }})
//   }
// )


export const universityDocumentRequiredSlice = createSlice({
  name: 'getSingleUniversityDocumentRequired',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityDocumentRequiredReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var rData = payload?.data?.documents
      if(rData){
        var ids = []
        var data = []
        for(var obj of rData){
          ids.push(obj?._id)
          var temp = {}
          temp["title"] = obj?.title
          temp["id"] = obj?._id
          temp["general"] = obj?.general
          data.push(temp)
        }
        state.data.data = {data:data,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }
    });

    builder.addCase(universityDocumentRequiredReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityDocumentRequiredReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityDocumentRequiredAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
    
      var obj = payload?.data?.universityDocument

      var temp = {}
      temp["title"] = obj?.title
      temp["_id"] = obj?._id
      temp["general"] = obj?.general

      state.data.data.data = [temp].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityDocumentRequiredAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityDocumentRequiredAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityDocumentRequiredSlice.reducer
export {universityDocumentRequiredReducer,universityDocumentRequiredAddReducer}