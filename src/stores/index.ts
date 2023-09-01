import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "./features/job-slice"
import recruiterReducer from "./features/recruiter-slice"

const persistMiddleware = (store) => (next) => (action) => {
  next(action)
  // guardar en localstorage el nuevo estado
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}


const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    recruiter: recruiterReducer
  },
  middleware: [persistMiddleware]
})

export type RootState = ReturnType<typeof store.getState>

// Inferred type: {jobs: JobsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
