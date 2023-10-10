import { useAppDispatch } from './store'
import { deleteJob, createJob } from '../stores/features/recruiter-slice'
import { type Job } from '../shared'

export const useRecruiterActions = () => {
  const dispatch = useAppDispatch()

  const createNewJob = ({ id, title, company, location, description, requirements, postedDate, applicantCount }: Job) => dispatch(createJob({ id, title, company, location, description, requirements, postedDate, applicantCount }))

  const removeJob = (jobOfferId: number) => dispatch(deleteJob({ id: jobOfferId }))

  return { removeJob, createNewJob }
}