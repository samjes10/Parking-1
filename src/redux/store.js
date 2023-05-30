import { configureStore } from '@reduxjs/toolkit'
import configReducer from '../redux/states/user'

export default configureStore({
  reducer: {
    user: configReducer,
  },
})