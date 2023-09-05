import type { JobId, Job } from "../shared"
import { useAppDispatch } from "./store"
import { jobToSave, removeJobToFavs } from "../stores/features/candidate-slice"


export function useCandidateActions () {
  const dispatch = useAppDispatch()

  const saveJob = (job: Job) => dispatch(jobToSave(job))

  const removeJob = (jobId: JobId) => dispatch(removeJobToFavs(jobId))


  return { saveJob, removeJob }
}