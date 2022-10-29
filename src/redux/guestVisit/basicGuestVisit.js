import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

function redirectTo(url){
  window.loaction.href = url
}

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

const getAllGuestVisitReducer = createAsyncThunk('basicGuestVisit/getAllGuestVisitReducer',
    async (data)=>{
      return axios.get("https://sigmalpu.herokuapp.com/api/v2/guestvisit/all",{
          headers: {
            'Content-Type': 'application/json'
          }})
    }
  )

const guestVisitAddReducer = createAsyncThunk('getAllMeetings/guestVisitAddReducer',
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






export const basicGuestVisitSlice = createSlice({
  name: 'basicGuestVisit',
  initialState,
  reducers: {
    setRedirectFunctionGuestVisit : (state,payload) => {
      state.data.redirectTo = payload?.payload?.redirectTo
    },
    updateViewDetailsGuestVisit : (state) =>{
      if(state.data.redirectTo){
        var row = state.data.data.rows
        for(const r of row){
          r["link"] = <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>state.data.redirectTo(r["link"])}>Details</div>
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGuestVisitReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.guestVisits
      if(!data){
        state.data.message="Something went wrong"
      }else if(data.length===0){
        state.data.message="Sorry data is not here"
      }else{
        state.data.message="Got the data"
        var r = []
        for(var i=0;i<data.length;i++){
          var x = data[i]
          var obj = {}
          obj["Title"] = x?.title ? x?.title : "---"
          obj["Visit Date"] = x?.visitDate ? x?.visitDate : "---"
          obj["Host"] = x?.host ? x?.host : "---"
          obj["Participants"] = x?.participants?.length ? x?.participants?.length : "---"
          obj["Visitors"] = x?.visitors?.length ? x?.visitors?.length : "---"
          obj["link"] = x?._id;    
          r.push(obj)
        }
        state.data.data = {rows:r,column:["Title","Visit Date","Host","Participants","Visitors","link"]}
      
      }
      state.data.loading = false
      
    });
    builder.addCase(getAllGuestVisitReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"

    });
    builder.addCase(getAllGuestVisitReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });



    builder.addCase(guestVisitAddReducer.fulfilled, (state, { payload }) => {
      var x = payload?.data?.guestVisit
      if(!x){
        state.data.message="Something went wrong"
      }else{
        state.data.message="Fulfilled"
        var obj = {}
        obj["Title"] = x?.title ? x?.title : "---"
        obj["Visit Date"] = x?.visitDate ? x?.visitDate : "---"
        obj["Host"] = x?.host ? x?.host : "---"
        obj["Participants"] = x?.participants?.length ? x?.participants?.length : "---"
        obj["Visitors"] = x?.visitors?.length ? x?.visitors?.length : "---"
        obj["link"] = x?._id;      
        
        state.data.data.rows = [obj].concat(state.data.data.rows)

      }
      state.data.loading = false

    });
    builder.addCase(guestVisitAddReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"
    });
    builder.addCase(guestVisitAddReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });
  },
})

export default basicGuestVisitSlice.reducer
export {getAllGuestVisitReducer,guestVisitAddReducer}
export const {setRedirectFunctionGuestVisit,updateViewDetailsGuestVisit} = basicGuestVisitSlice.actions