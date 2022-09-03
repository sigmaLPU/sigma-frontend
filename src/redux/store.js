import { configureStore } from '@reduxjs/toolkit'

// reducers
import authUserReducer from './users/staff/auth.js'
import authenticateToken from './users/staff/auth.js'

import getAllUniversitySlice from './university/getAllUniversity.js'
import getSingleUniversitySlice from './university/getSingleUniversity.js'

import getRequestSlice from './getRequestAsync'

import {universityBasicDetailsSlice,universityContactSlice,universityMeetingSlice} from './routes'

export const store = configureStore({
  reducer: {
    auth : authUserReducer,
    authToken:authenticateToken,
  
    getAllUniversity:getAllUniversitySlice,
    getSingleUniversitySlice:getSingleUniversitySlice,
    getRequestSlice:getRequestSlice,

    universityBasicDetailsSlice:universityBasicDetailsSlice,
    universityContactSlice:universityContactSlice,
    universityMeetingSlice:universityMeetingSlice
  
  },
})