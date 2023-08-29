import { useAppSelector } from "../hooks/store"
import { CardJob } from "./CardJob"

// interface JobListProps {
//   jobs: Job[]
//   loading: boolean
//   recommendedJobs: Job[]
// }

const ListEmptyJobs = () => {
  return (
    <article>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  )
}

export const JobList: React.FC = () => {
  const { jobs } = useAppSelector(state => state.jobs)
  if (jobs.length < 0) return <ListEmptyJobs />

  // if (loading) {
  //   return <div>loading</div>
  // }

  return (
    <ul className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
      {jobs
        .map(job => (
          <li key={`jobId_${job.id}`}>
            <CardJob job={job} />
          </li>
        ))}
    </ul>

  )
}
