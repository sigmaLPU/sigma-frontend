import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import {normalize} from '../normalize'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      data:[],
      ids:[]
    },
    id:"",
    redirect:false,
  }
}

const universityGuestVisitReducer = createAsyncThunk('universityGuestVisit/universityGuestVisitReducer',
  async (data)=>{
    data = normalize(data)
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/guestvisit/${data?.id}/all`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)


const universityGuestVisitAddReducer = createAsyncThunk('universityGuestVisitAdd/universityGuestVisitAddReducer',
  async (data)=>{

    data = normalize(data)
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/guestvisit/add`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };
    return axios(config)
  }
)


// const universityGuestVisitUpdateReducer = createAsyncThunk('universityGuestVisit/universityGuestVisitUpdateReducer',
//   async (data)=>{
//     return axios.put(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/meeting/${data?.id}/update`,data?.data,{
//         headers: {
//           'Content-Type': 'application/json'
//     }})
//   }
// )







export const universityGuestVisitSlice = createSlice({
  name: 'getSingleuniversityGuestVisit',
  initialState,
  reducers: {
    redirectToGuestVisitProfile : (state,payload) => {
      state.data.loading = false
      state.data.id = ""
    },
  },
  extraReducers: (builder) => {
    
    builder.addCase(universityGuestVisitReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.guestVisits

      console.log("animesh -> ",payload)
      
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
      state.data.redirect = false
    });
    
    builder.addCase(universityGuestVisitReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
      state.data.redirect = false
    });





    builder.addCase(universityGuestVisitAddReducer.fulfilled, (state, { payload }) => {
    
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.guestVisit

      console.log("pass")
      
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
        state.data.id = obj?._id
      state.data.redirect = true

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

export const {redirectToGuestVisitProfile} = universityGuestVisitSlice.actions