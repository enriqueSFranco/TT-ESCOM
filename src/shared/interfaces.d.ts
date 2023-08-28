import { CandidateId } from "./types.d"

export interface Job {
  id: number
  title: string
  company: string
  location: string
  description: string
  salary: number
  workType: string
  experienceLevel: string
}

export interface Candidate {
  id: CandidateId
  firstName: string
  lastName: string
  email: string
  collegeCareer: string
}

export interface Application {
  candidateId: CandidateId
  applications: Job[]
}