import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Job } from '../../shared/interfaces.d'
import { JobTitle } from '../../shared'

interface JobsState {
  jobs: Job[]
}

const initialState: JobsState = (() => {
  const store = window.localStorage.getItem('__redux__store__')
  return store != null ? JSON.parse(store).jobs : { jobs: [] }
})()

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    findJob: (state, action: PayloadAction<JobTitle>) => {
      const title = action.payload.title.toLowerCase()

      state.jobs.find(job => {
        const jobLowerCase = job.title.toLowerCase()
        return jobLowerCase.includes(title)
      })
    }
  }
})

export const { findJob } = jobsSlice.actions

export default jobsSlice.reducer