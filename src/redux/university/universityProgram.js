import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import {normalize} from '../normalize'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      "data":[],
      "ids":[],
      "column":[]
    },
  }
}

const universityProgramReducer = createAsyncThunk('universityProgram/universityProgramReducer',
  async (data)=>{
    data = normalize(data)
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/program/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)


const universityProgramAddReducer = createAsyncThunk('universityProgram/universityProgramAddReducer',
  async (data)=>{
    data = normalize(data)
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/program/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };

    return axios(config)
  }
)




export const universityProgramSlice = createSlice({
  name: 'getSingleUniversityProgram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityProgramReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.programs
      
      var arr = []
      var ids = []
      
      for(const obj of data){
        var temp = {}
        temp["LPU Degree Name"] = obj?.lpu_name ? obj?.lpu_name : "Not available"
        temp["Final Degree Name"] = obj?.forign_name ? obj?.forign_name : "Not available"
        temp["Fees"] = obj?.tutionFees ? obj?.tutionFees : "Not available"
        temp["Scholarship"] = obj?.scholarship ? obj?.scholarship : "Not available"
        temp["Model"] = obj?.model ? obj?.model : "Not available"
        temp["Credit Transfer"] = obj?.creditTransfer 
        temp["Semester Exchange"] = obj?.semesterExchange 
        temp["id"] = obj?._id
        arr.push(temp)
        ids.push(obj?._id)
      }
      state.data.data = {data:arr,ids:ids,column:["LPU Degree Name","Final Degree Name","Fees","Scholarship","Model", "Credit Transfer", "Semester Exchange"]}
    });

    builder.addCase(universityProgramReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityProgramReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


    builder.addCase(universityProgramAddReducer.fulfilled, (state, { payload }) => {
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.universityProgram
 

      var temp = {}
      temp["LPU Degree Name"] = obj?.lpu_name ? obj?.lpu_name : "Not available"
      temp["Final Degree Name"] = obj?.forign_name ? obj?.forign_name : "Not available"
      temp["Fees"] = obj?.tutionFees ? obj?.tutionFees : "Not available"
      temp["Scholarship"] = obj?.scholarship ? obj?.scholarship : "Not available"
      temp["Model"] = obj?.model ? obj?.model : "Not available"
      temp["Credit Transfer"] = obj?.creditTransfer 
      temp["Semester Exchange"] = obj?.semesterExchange 
      temp["id"] = obj?._id

      state.data.data.column = ["LPU Degree Name","Final Degree Name","Fees","Scholarship","Model", "Credit Transfer", "Semester Exchange"]
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)
      state.data.data.data = [temp].concat(state.data.data.data)
      // state.data.data = {data:arr,ids:ids,column:["LPU Degree Name","Final Degree Name","Fees","Scholarship","Agreements"]}
    });

    builder.addCase(universityProgramAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityProgramAddReducer.rejected, (state, { payload }) => {
      state.data.message = "Failed"
      state.data.loading = false
    });


  },
})

export default universityProgramSlice.reducer
export {universityProgramReducer,universityProgramAddReducer}