import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Job, JobId } from "../../shared"

interface CandidateSliceState {
  myJobs: Job[]
}

const initialState: CandidateSliceState = (() => {
  const store = window.localStorage.getItem('__redux__state__')
  return store != null ? JSON.parse(store).candidate : { myJobs: [] }
})()

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    jobToSave: (state, action: PayloadAction<Job>) => {
      const job: Job = action.payload

      // buscar si la vacante se encuentra en la lista de favoritos para no agregarla mas de una vez
      const jobIndx = state.myJobs.findIndex(myJob => myJob.id === job.id)
      if (jobIndx === -1) {
        const updatedJob = { ...job, isFavorite: true }
        console.log(updatedJob)
        state.myJobs = [...state.myJobs, updatedJob]
      }
    },
    removeJobToFavs: (state, action: PayloadAction<JobId>) => {
      const jobIdx = action.payload.id
      const draft = [...state.myJobs]

      // buscamos si la vacante se encuentra en la lista de favoritos
      const isJobInFavorites = draft.findIndex(myJob => myJob.id === jobIdx)
      if (isJobInFavorites >= 0) {
        console.log('removiendo vacante de favoritos')
        state.myJobs.filter(myJob => myJob.id !== jobIdx)
      }
    },
    rollbackSaveJob: (state, action: PayloadAction<Job>) => {

    }
  }
})

export const { jobToSave, removeJobToFavs } = candidateSlice.actions

export default candidateSlice.reducer