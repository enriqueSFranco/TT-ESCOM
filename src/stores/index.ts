import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "./features/job-slice"

const store = configureStore({
  reducer: {
    jobs: jobsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

// Inferred type: {jobs: JobsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
