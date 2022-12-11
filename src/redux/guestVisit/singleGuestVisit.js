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
    data:{}
  }
}

const getGuestVisitReducer = createAsyncThunk('singleGuestVisit/getGuestVisitReducer',
    async (data)=>{
      return axios.get(`https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/guestvisit/${data?.id}`,{
          headers: {
            'Content-Type': 'application/json',
          Authorization : "Bearer "+localStorage.getItem('token')
          }})
    }
  )

// const guestVisitAddReducer = createAsyncThunk('getAllMeetings/guestVisitAddReducer',
//   async (data)=>{ 
//     var config = {
//       method: 'post',
//       url: `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/guestvisit/add`,
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data : data?.data
//     };
//     return axios(config)
//   }
// )






export const singleGuestVisitSlice = createSlice({
  name: 'singleGuestVisit',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getGuestVisitReducer.fulfilled, (state, { payload }) => {
      var data = payload?.data?.guestVisit
      if(!data){
        state.data.message="Something went wrong"
      }else if(data.length===0){
        state.data.message="Sorry data is not here"
      }else{
        state.data.message="Got the data"
        // state.data              
      }
      state.data.loading = false
      
    });
    builder.addCase(getGuestVisitReducer.pending, (state, { payload }) => {
      state.data.loading = true
      state.data.message = "Loading"

    });
    builder.addCase(getGuestVisitReducer.rejected, (state, { payload }) => {
      state.data.loading = false
      state.data.message = "Failed"
    });



    // builder.addCase(guestVisitAddReducer.fulfilled, (state, { payload }) => {
    //   var x = payload?.data?.guestVisit
    //   if(!x){
    //     state.data.message="Something went wrong"
    //   }else{
    //     state.data.message="Fulfilled"
    //     var obj = {}
    //     obj["Title"] = x?.title ? x?.title : "---"
    //     obj["Visit Date"] = x?.visitDate ? x?.visitDate : "---"
    //     obj["Host"] = x?.host ? x?.host : "---"
    //     obj["Participants"] = x?.participants?.length ? x?.participants?.length : "---"
    //     obj["Visitors"] = x?.visitors?.length ? x?.visitors?.length : "---"
    //     obj["link"] = x?._id;      
        
    //     state.data.data.rows = [obj].concat(state.data.data.rows)

    //   }
    //   state.data.loading = false

    // });
    // builder.addCase(guestVisitAddReducer.pending, (state, { payload }) => {
    //   state.data.loading = true
    //   state.data.message = "Loading"
    // });
    // builder.addCase(guestVisitAddReducer.rejected, (state, { payload }) => {
    //   state.data.loading = false
    //   state.data.message = "Failed"
    // });
  },
})

export default singleGuestVisitSlice.reducer
export {getGuestVisitReducer/*,guestVisitAddReducer*/}
// export const {setRedirectFunctionGuestVisit,updateViewDetailsGuestVisit} = basicGuestVisitSlice.actions