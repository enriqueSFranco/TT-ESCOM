import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RecruiterJobOffer, RecruiterJobOfferId } from "../../shared"

// DATA
const DEFAULT_STATE: RecruiterJobOffer[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCo",
    location: "Remote",
    description: "We are looking for a skilled Frontend Developer...",
    requirements: "Bachelor's degree in Computer Science...",
    postedDate: "20/08/23",
    applicantCount: 10
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateCorp",
    location: "San Francisco, CA",
    description: "Join our team as a Backend Engineer and...",
    requirements: "3+ years of experience in backend development...",
    postedDate: "20/08/23",
    applicantCount: 5
  }
]

interface RecruiterJobsState {
  jobOffers: RecruiterJobOffer[]
}

const initialState: RecruiterJobsState = (() => {
  const store = window.localStorage.getItem('__redux__state__')
  return store != null ? JSON.parse(store).recruiter : { jobOffers: DEFAULT_STATE }
})()

export const recruiterSlice = createSlice({
  name: 'recruiter',
  initialState,
  reducers: {
    createJob: (state, action: PayloadAction<RecruiterJobOffer>) => {
      state.jobOffers.push(action.payload)
    },
    deleteJob: (state, action: PayloadAction<RecruiterJobOfferId>) => {
      const jobIdx = action.payload.id
      state.jobOffers = state.jobOffers.filter(job => job.id !== jobIdx)
    }
  }
})

export const { deleteJob, createJob } = recruiterSlice.actions

export default recruiterSlice.reducer