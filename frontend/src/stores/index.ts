import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './features/job-slice'
import candidateReducer from './features/candidate-slice'
import recruiterReducer from './features/recruiter-slice'

const persistMiddleware = (store) => (next) => (action) => {
  next(action)
  // guardar en localstorage el nuevo estado
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}


const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    recruiter: recruiterReducer,
    candidate: candidateReducer
  },
  middleware: [persistMiddleware]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
