import { configureStore } from '@reduxjs/toolkit'

// reducers
import authUserReducer from './users/staff/auth.js'
import authenticateToken from './users/staff/auth.js'

export const store = configureStore({
  reducer: {
    auth : authUserReducer,
    authToken:authenticateToken,
  },
})