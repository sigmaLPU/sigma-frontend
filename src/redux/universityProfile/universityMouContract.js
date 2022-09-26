import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:{
    message:"Loading",
    loading:true,
    data:{
      "data":[],
      "ids":[]
    }
  }
}

const universityMouContractReducer = createAsyncThunk('universityMouContract/universityMouContractReducer',
  async (data)=>{
    console.log("Fetching university mou contact data")
    return axios.get(`https://sigmalpu.herokuapp.com/api/v2/university/mou/${data?.id}`,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)


const universityMouContractAddReducer = createAsyncThunk('universityMouContract/universityMouContractAddReducer',
  async (data)=>{
    console.log("Adding university mou contact data",data)

    var config = {
      method: 'post',
      url: `https://sigmalpu.herokuapp.com/api/v2/university/mou/${data?.id}/add`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data?.data
    };
    console.log(config)
    return axios(config)
  }
)


const universityMouContractUpdateReducer = createAsyncThunk('universityMouContract/universityMouContractUpdateReducer',
  async (data)=>{
    console.log("Update university mou contact data")
    return axios.put(`https://sigmalpu.herokuapp.com/api/v2/university/mou/${data?.id}/update`,data?.data,{
        headers: {
          'Content-Type': 'application/json'
    }})
  }
)





const universityMouContractSlice = createSlice({
  name: 'universityMouContract',
  initialState,
  reducers:{},
  extraReducers : (builder) => {

    // get
    builder.addCase(universityMouContractReducer.fulfilled, (state, { payload }) => {
      console.log("university mou fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var data = payload?.data?.mous
    
      if(data){
        console.log("mou contract adding to state")
        var arr = []
        var ids = []
        for(const obj of data){
          var temp = {}
          temp["type"] = obj?.type
          temp["title"] = obj?.title
          temp["id"] = obj?._id
          temp["startDate"] = obj?.startDate
          temp["endDate"] = obj?.endDate
          temp["file"] = obj?.file
          arr.push(temp)
          ids.push(obj?._id)
        }
        console.log("mou contract ---> ",arr)
        if(arr.length===0){
          state.data.message = "No record found"
        }
        state.data.data = {data:arr,ids:ids}
      }else{
        state.data.message = "Something went wrong"
      }

    });

    builder.addCase(universityMouContractReducer.pending, (state, { payload }) => {
      console.log("university Mou pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractReducer.rejected, (state, { payload }) => {
      console.log("university mou rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });


    // add
    builder.addCase(universityMouContractAddReducer.fulfilled, (state, { payload }) => {
      console.log("university mou fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false
      var obj = payload?.data?.universityMou
      
      var temp = {}
      temp["type"] = obj?.type
      temp["title"] = obj?.title
      temp["id"] = obj?._id
      temp["startDate"] = obj?.startDate
      temp["endDate"] = obj?.endDate
      temp["file"] = obj?.file

      state.data.data.data = [temp].concat(state.data.data.data)
      state.data.data.ids = [obj?._id].concat(state.data.data.ids)

    });

    builder.addCase(universityMouContractAddReducer.pending, (state, { payload }) => {
      console.log("university Mou pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractAddReducer.rejected, (state, { payload }) => {
      console.log("university mou rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });


    // update
    builder.addCase(universityMouContractUpdateReducer.fulfilled, (state, { payload }) => {
      console.log("university mou update fulfilled payload",payload)
      state.data.message = "Fulfilled"
      state.data.loading = false

      var obj = payload?.data?.universityMou
      var temp = {}
      temp["type"] = obj?.type
      temp["title"] = obj?.title
      temp["id"] = obj?._id
      temp["startDate"] = obj?.startDate
      temp["endDate"] = obj?.endDate
      temp["file"] = obj?.file

      var id = obj?._id
      var index = -1
      var ids = state.data.data.ids

      for(var i=0;i<ids.length;i++){
        if(ids[i]==id){
          index = i
        }
      }
      if(index!=-1){
        state.data.data.data[index] = temp        
      }else{
        console.log("Id not found",id)
      }

    });

    builder.addCase(universityMouContractUpdateReducer.pending, (state, { payload }) => {
      console.log("university Mou update pending payload",payload)
      state.data.loading = true
      state.data.message = "Loading"
    });
    
    builder.addCase(universityMouContractUpdateReducer.rejected, (state, { payload }) => {
      console.log("university mou update rejected payload",payload)
      state.data.message = "Failed"
      state.data.loading = false
    });

  }
})

export default universityMouContractSlice.reducer
export {universityMouContractReducer,universityMouContractAddReducer,universityMouContractUpdateReducer}
