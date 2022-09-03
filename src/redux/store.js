import { configureStore } from '@reduxjs/toolkit'

// reducers
import authUserReducer from './users/staff/auth.js'
import authenticateToken from './users/staff/auth.js'

import {getAllUniversitySlice} from './routes'

import {
  universityBasicDetailsSlice,
  universityContactSlice,
  universityMeetingSlice,
  universityProgramSlice,
} from './routes'

export const store = configureStore({
  reducer: {
    auth : authUserReducer,
    authToken:authenticateToken,
  
    getAllUniversitySlice:getAllUniversitySlice,

    universityBasicDetailsSlice:universityBasicDetailsSlice,
    universityContactSlice:universityContactSlice,
    universityMeetingSlice:universityMeetingSlice,
    universityProgramSlice:universityProgramSlice,  
  },
})