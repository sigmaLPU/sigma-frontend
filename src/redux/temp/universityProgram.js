import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{},
  }
}

const universityProgramReducer = createAsyncThunk('universityProgram/universityProgramReducer',
  async (data)=>{
    console.log("Fetching university program data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/program/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

export const universityProgramSlice = createSlice({
  name: 'getSingleUniversityProgram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityProgramReducer.fulfilled, (state, { payload }) => {
      console.log("university program fulfilled payload",payload)
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
        temp["Agreements"] = <div>View Details</div>

        arr.push(temp)
        ids.push(obj?._id)
      }
      state.data.data = {data:arr,ids:ids,column:["LPU Degree Name","Final Degree Name","Fees","Scholarship","Agreements"]}
    });

    builder.addCase(universityProgramReducer.pending, (state, { payload }) => {
      console.log("university program pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityProgramReducer.rejected, (state, { payload }) => {
      console.log("university program rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityProgramSlice.reducer
export {universityProgramReducer}