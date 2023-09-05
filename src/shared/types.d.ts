import { Job } from "./interfaces"

export type CandidateId = `${string}-${string}-${string}-${string}-${string}`

export type JobTitle = Pick<Job, "title">
export type JobId = Pick<Job, "id">

