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
  }
}

const universityGuestVisitReducer = createAsyncThunk('universityGuestVisit/universityGuestVisitReducer',
  async (data)=>{
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/guestvisit/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)


const universityGuestVisitAddReducer = createAsyncThunk('universityGuestVisitAdd/universityGuestVisitAddReducer',
  async (data)=>{

    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/guestvisit/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };
    return axios(config)
  }
)


// const universityGuestVisitUpdateReducer = createAsyncThunk('universityGuestVisit/universityGuestVisitUpdateReducer',
//   async (data)=>{
//     return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/meeting/${data?.id}/update`,data?.data,{
//         headers: {
//           'Content-Type': 'application/json'
//     }})
//   }
// )







export const universityGuestVisitSlice = createSlice({
  name: 'getSingleuniversityGuestVisit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityGuestVisitReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.guestVisits
      
      if(data){
        var temp = {}
        var arr = []
        var ids = []
        for(const obj of data){
          var temp2 = {}
          temp2["title"] = obj?.title
          temp2["description"] = obj?.description
          temp2["id"] = obj?._id
          temp2["visitDate"] = obj?.visitDate
          temp2["visitPeriod"] = obj?.visitPeriod
          temp2["visitors"] = obj?.visitors
          temp2["visitorsSize"] = obj?.visitors?.length
          temp2["host"] = obj?.hostEmail
          temp2["hostPhone"] = obj?.hostPhone
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

    builder.addCase(universityGuestVisitReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityGuestVisitReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });





    builder.addCase(universityGuestVisitAddReducer.fulfilled, (state, { payload }) => {
    
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.guestVisit
      
      var temp2 = {}
      temp2["title"] = obj?.title
        temp2["description"] = obj?.description
        temp2["id"] = obj?._id
        temp2["visitDate"] = obj?.visitDate
        temp2["visitPeriod"] = obj?.visitPeriod
        temp2["visitors"] = obj?.visitors
        temp2["visitorsSize"] = obj?.visitors?.length
        temp2["host"] = obj?.hostEmail
        temp2["hostPhone"] = obj?.hostPhone
        temp2["university"] = obj?.university

      state.data.data.data = [temp2].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityGuestVisitAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityGuestVisitAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });



  },
})

export default universityGuestVisitSlice.reducer
export {universityGuestVisitReducer,universityGuestVisitAddReducer}