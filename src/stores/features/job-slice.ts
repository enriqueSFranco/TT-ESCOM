import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Job } from "../../shared/interfaces"
import data from "../../api/jobs.json"

interface JobsState {
  jobs: Job[]
}

type JobWithId = Pick<Job, "id">

const initialState: JobsState = {
  jobs: data
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {}
})

export default jobsSlice.reducer