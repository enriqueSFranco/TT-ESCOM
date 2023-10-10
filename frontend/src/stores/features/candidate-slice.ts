import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Job } from "../../shared"

interface CandidateSliceState {
  myJobs: Job[]
}

const initialState: CandidateSliceState = (() => {
  const store = window.localStorage.getItem('__redux__state__')
  return store != null ? JSON.parse(store).candidate : { myJobs: null }
})()

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    saveJobToFavs: (state, action: PayloadAction<Job>) => {
      state.myJobs.concat([...state.myJobs, action.payload])
    }
  }
})

export const { saveJobToFavs } = candidateSlice.actions

export default candidateSlice.reducer