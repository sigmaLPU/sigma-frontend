import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
  data:{
    loading:true,
    redirectTo:null,
    message:"Loading",
    data:{
      rows:[],
      column:[],
      pagenation_id:null,
    }
  }
}

const getAllUniversityMeetingsReducer = createAsyncThunk('getAllMeetings/getAllUniversityMeetingsReducer',
    async (data)=>{
      return axios.get("https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/all",{
          headers: {
            'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
          }})
    }
  )

const universityMeetingsAddReducer = createAsyncThunk('getAllMeetings/universityMeetingAddReducer',
  async (data)=>{
    var config = {
      method: 'post',
      url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/meeting/create`,
      headers: { 
        'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
      },
      data : data?.data
    };
    return axios(config)
  }
)






export const getAllMeetingsSlice = createSlice({
  name: 'getAllMeetings',
  initialState,
  reducers: {
    setRedirectFunctionMeetings : (state,payload) => {
      state.data.redirectTo = payload?.payload?.redirectTo
    },
    updateViewDetailsMeetings : (state) =>{
      if(state.data.redirectTo){
        var row = state.data.data.rows
        for(const r of row){
          r["link"] = <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>state.data.redirectTo(r["link"])}>Details</div>
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUniversityMeetingsReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.meetings
      if(!data){
        state.data.message="Something went wrong"
      }else if(data.length===0){
        state.data.message="Sorry data is not here"
      }else{
        state.data.message="Fulfilled"
        var r = []
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
        state.data.data = {rows:r,column:["Meeting Topic","Meeting Agenda","Meetings","Meeting Time","Participants","link"]}
      
      }
      state.data.loading = false
      
    });
    builder.addCase(getAllUniversityMeetingsReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    builder.addCase(getAllUniversityMeetingsReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });



    builder.addCase(universityMeetingsAddReducer.fulfilled, (state, { payload }) => {
      var x = payload?.data?.university
      if(!x){
        state.data.message="Something went wrong"
      }else{
        state.data.message="Fulfilled"
        var obj = {}
        obj["Meeting Topic"] = x?.title ? x?.title : "---"
        obj["Meeting Agenda"] = x?.agenda ? x?.agenda : "---"
        obj["Meetings"] =  x?.meeting ? x?.meeting : "---"
        obj["Meeting Time"] =  x?.meetingTime ? x?.meetingTime : "---"
        obj["Participants"] = x?.participants?.length ? x?.participants?.length : "---"
        obj["link"] = x?._id;    
        
        state.data.data.rows = [obj].concat(state.data.data.rows)

      }
      state.data.loading = false

    });
    builder.addCase(universityMeetingsAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    builder.addCase(universityMeetingsAddReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });
  },
})

export default getAllMeetingsSlice.reducer
export {getAllUniversityMeetingsReducer,universityMeetingsAddReducer}
export const {setRedirectFunctionMeetings,updateViewDetailsMeetings} = getAllMeetingsSlice.actions