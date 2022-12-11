
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data:[],
  loading:false,
}

const searchReducer = createAsyncThunk('search/searchReducer',
  async (data)=>{
    return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/search/all?search=${data?.query}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
    }})
  }
)

function getUniversityFunction(data){
  var r = []
  let resp = {}
  let message = ""
  let error = false
  if(data?.length>=0){
    for(var i=0;i<data.length;i++){
      var x = data[i]
      var obj = {}
      obj["Name of University"] = x?.name ? x?.name : "---"
      obj["Country"] = x?.country ? x?.country : "---"
      obj["Meetings"] =  x?.meeting ? x?.meeting : "---"
      obj["Contact Person"] =  x?.contact ? x?.contact[0] : "---"
      obj["Agreement"] = x?.agreement ? x?.agreement : "---"
      obj["Details"] = x?._id;    
      r.push(obj)
    }
    message = "data found"
    resp = {rows:r,column:["Name of University","Country","Meetings","Contact Person","Agreement","Details"]}
  }else if(data){
    message="Something went wrong"
    error = true
  }
  return {response:resp,error,message}
}

function getUsersFunction(data){
  var r = []
  let resp = {}
  let message = ""
  let error = false
  if(data?.length>=0){
    for(var i=0;i<data.length;i++){
      var x = data[i]
      var obj = {}
      obj["Name"] = x?.name ? x?.name : "---"
      obj["Email"] = x?.email ? x?.email : "---"
      obj["RegNo"] =  x?.regNo ? x?.regNo : "---"
      obj["Details"] = x?._id;    
      r.push(obj)
    }
    message = "data found"
    resp = {rows:r,column:["Name","Email","RegNo","Details"]}
  }else if(data){
    message="Something went wrong"
    error = true
  }
  return {response:resp,error,message}
}

function getContactsFunction(data){
  var r = []
  let resp = {}
  let message = ""
  let error = false
  if(data?.length>=0){
    for(var i=0;i<data.length;i++){
      var x = data[i]
      var obj = {}
      obj["Name"] = x?.name ? x?.name : "---"
      obj["Email"] = x?.email ? x?.email : "---"
      obj["Phone"] =  x?.phone ? x?.phone : "---"
      obj["Description"] =  x?.description ? x?.description : "---"
      obj["Details"] = x?._id;    
      r.push(obj)
    }
    message = "data found"
    resp = {rows:r,column:["Name","Email","Phone","Description","Details"]}
  }else if(data){
    message="Something went wrong"
    error = true
  }
  return {response:resp,error,message}
}

function getMeetingsFunction(data){
  var r = []
  let resp = {}
  let message = ""
  let error = false
  if(data?.length>=0){
    for(var i=0;i<data.length;i++){
      var x = data[i]
      var obj = {}
      obj["Meeting Topic"] = x?.title ? x?.title : "---"
      obj["Meeting Agenda"] = x?.agenda ? x?.agenda : "---"
      obj["Meetings"] =  x?.meeting ? x?.meeting : "---"
      obj["Meeting Time"] =  x?.meetingTime ? x?.meetingTime : "---"
      obj["Participants"] = x?.participants?.length ? x?.participants?.length : "---"
      obj["link"] = x?._id;    
      r.push(obj)
    }
    message = "data found"
    resp = {rows:r,column:["Meeting Topic","Meeting Agenda","Meetings","Meeting Time","Participants","link"]}
  }else if(data){
    message="Something went wrong"
    error = true
  }
  return {response:resp,error,message}
}

function getProgramsFunction(data){
  var arr = []
  var ids = []

  let resp = {}
  let message = ""
  let error = false
  if(data?.length>=0){
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
      message = "data found"
      resp = {rows:arr,ids:ids,column:["LPU Degree Name","Final Degree Name","Fees","Scholarship","Agreements"]}
  }else if(data){
    message="Something went wrong"
    error = true
  }
  return {response:resp,error,message}
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(searchReducer.fulfilled, (state, { payload }) => {

      function compare(a,b){
        if(a?.length>b.length){
          return -1
        }
        return 1
      }



      const data = payload?.data

      const functions = {
        "universities":getUniversityFunction,
        "users":getUsersFunction,
        "contacts":getContactsFunction,
        "meetings":getMeetingsFunction,
        "programs":getProgramsFunction
      }

      let keys = Object.keys(functions)
      let ans = []
      
      for(var i=0;i<keys.length;i++){
        let key = keys[i]
        let dataIndivisual = data[key]
        let resp = functions[key](dataIndivisual)
        
        let len = resp?.response?.rows?.length || resp?.response?.data?.length || 0
        ans.push({name:key,length:len,...resp})
      }

      ans.sort(compare)

      state.data = ans
      state.loading = false
    });

    builder.addCase(searchReducer.pending, (state, { payload }) => {
      state.loading = true
    });
    
    builder.addCase(searchReducer.rejected, (state, { payload }) => {
      state.loading = false
    });
  },
})

export default searchSlice.reducer
export {searchReducer}