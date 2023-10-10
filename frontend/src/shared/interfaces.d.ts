import { CandidateId } from "./types"

export interface Job {
  id: number
  title: string
  company: string
  location: string
  description: string
  salary: number
  workType: string
  experienceLevel: string
  requirements: string
  postedDate: string
  applicantCount: number
}

export interface Candidate {
  id: string
  firstName: string
  lastName: string
  email: string
  collegeCareer: string
}

export interface Application {
  candidateId: string
  applications: ApplicationItem[]
}

export interface ApplicationItem {
  title: string
  company: string
  location: string
}

interface ExperienceItem {
  id: number
  jobTitle: string
  description: string
  date: Date
  technologiesUsed: string[]
}

interface LanguageItem {
  language: string
  fluency: string
}