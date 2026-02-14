import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import { usersApi } from './usersApi.js'


export default configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})
