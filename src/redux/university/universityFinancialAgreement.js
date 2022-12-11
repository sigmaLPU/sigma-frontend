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

const universityFinancialAgreementReducer = createAsyncThunk('universityFinancialAgreement/universityFinancialAgreementReducer',
  async (data)=>{
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/extra/finincialAgreements/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)

const universityFinancialAgreementAddReducer = createAsyncThunk('universityFinancialAgreement/universityFinancialAgreementAddReducer',
  async (data)=>{
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/extra/finincialAgreements/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };

    return axios(config)
  }
)


// const universityRecentUpdateUpdateReducer = createAsyncThunk('universityRecentUpdate/universityRecentUpdateUpdateReducer',
//   async (data)=>{
//     return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/update/${data?.id}/update`,data?.data,{
//         headers: {
//           'Content-Type': 'application/json'
//     }})
//   }
// )


export const universityFinancialAgreementSlice = createSlice({
  name: 'getSingleUniversityFinancialAgreement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityFinancialAgreementReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var rData = payload?.data?.finincialAggrements
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

    builder.addCase(universityFinancialAgreementReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityFinancialAgreementReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityFinancialAgreementAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
    
      var obj = payload?.data?.universityFinincialAggrement

      var temp = {}
      temp["title"] = obj?.title
      temp["_id"] = obj?._id
      temp["general"] = obj?.general

      state.data.data.data = [temp].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityFinancialAgreementAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityFinancialAgreementAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityFinancialAgreementSlice.reducer
export {universityFinancialAgreementReducer,universityFinancialAgreementAddReducer}