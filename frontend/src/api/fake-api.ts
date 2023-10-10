import type { Application, Candidate, Job } from "../shared"
import jobs from "./jobs.json"
import users from "./candidates.json"
import applications from "./applications.json"

const DELAY = 1000

const createDelayedPromise = <T> (value: T, delay: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

export const api = {
  jobsList: async (): Promise<Job[]> => {
    // TODO: MAPEAR LA DATA
    const mappedJobs: Job[] = jobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      salary: job.salary,
      workType: job.workType,
      experienceLevel: job.experienceLevel,
    }))
    return createDelayedPromise(mappedJobs, DELAY)
  },
  candidate: async (): Promise<Candidate[]> => {
    // TODO: MAPEAR LA DATA
    const candidates = users.map(user => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      collegeCareer: user.collegeCareer
    }))

    return createDelayedPromise(candidates, DELAY)
  },
  applicationsList: async (): Promise<Application> => {
    // TODO: MAPEAR LA DATA

    return createDelayedPromise(applications, DELAY)
  }
}