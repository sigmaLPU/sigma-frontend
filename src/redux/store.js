import { configureStore } from '@reduxjs/toolkit'

// reducers
import authUserReducer from './users/staff/auth.js'
import authenticateToken from './users/staff/auth.js'

import getAllUniversitySlice from './university/getAllUniversity.js'

export const store = configureStore({
  reducer: {
    auth : authUserReducer,
    authToken:authenticateToken,
    getAllUniversity:getAllUniversitySlice,
  },
})