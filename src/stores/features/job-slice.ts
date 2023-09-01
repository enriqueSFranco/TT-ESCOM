import { createSlice } from "@reduxjs/toolkit"
import { Job } from "../../shared/interfaces.d"
import data from "../../api/jobs.json"

interface JobsState {
  jobs: Job[]
}

type JobTitle = Pick<Job, "title">

const initialState: JobsState = {
  jobs: data
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
  }
})



export default jobsSlice.reducer