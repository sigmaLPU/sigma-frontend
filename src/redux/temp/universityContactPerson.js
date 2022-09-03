import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{"data":[],"ids":[]},
  }
}

const universityContactReducer = createAsyncThunk('universityContact/universityContactReducer',
  async (data)=>{
    console.log("Fetching university contact data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/contact/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)

export const universityContactSlice = createSlice({
  name: 'getSingleUniversityContact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(universityContactReducer.fulfilled, (state, { payload }) => {
      console.log("university contact fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false

      var data = payload?.data?.contacts

      if(data){
          var temp = []
          var ids = []
          
          for(const obj of data){
            var temp2 = {}
            temp2["name"] = obj?.name ? obj?.name : "Not available";
            temp2["mobile"] = obj?.phone ? obj?.phone : "Not available";
            temp2["mail"] = obj?.email ? obj?.email : "Not available";
            temp2["img"] = obj?.img ? obj?.img : "https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png";
            ids.push(obj?._id)
            temp.push(temp2)
          }

          state.data.data = {data:temp,ids:ids}
        }else{
          state.data.message = "Something wrong"
        }      
    });

    builder.addCase(universityContactReducer.pending, (state, { payload }) => {
      console.log("university contact pending payload",payload)
      state.data.message = "Loading"
    });
    
    builder.addCase(universityContactReducer.rejected, (state, { payload }) => {
      console.log("university contact rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  },
})

export default universityContactSlice.reducer
export {universityContactReducer}