import { useAppDispatch } from './store'
import { deleteJob, createJob } from "../stores/features/recruiter-slice"


export const useRecruiter = () => {
  const dispatch = useAppDispatch()

  const createNewJob = ({ }) => dispatch(createJob({ id }))

  const removeJob = (jobOfferId: number) => dispatch(deleteJob({ id: jobOfferId }))

  return { removeJob, createNewJob }
}