import { memo } from "react"
// import CustomSkeleton from "components/Skeleton/Skeleton"
import { CardJob } from "./CardJob"
import { Job } from "../shared/interfaces.d"
// import styles from "./JobList.module.css"

interface JobListProps {
  jobs: Job[]
  loading: boolean
  recommendedJobs: Job[]
}

const ListEmptyJobs = () => {
  return (
    <article>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  )
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  loading,
  recommendedJobs,
}) => {

  if (jobs?.length < 0) return <ListEmptyJobs />

  // if (isVacantRecommended) {
  //   return (
  //     <>
  //       <h2 className="">Vacantes Recomendadas</h2>
  //       {recommendedJobs.map((el) => (
  //         <CardJob
  //           key={`jobId_${crypto.randomUUID()}`}
  //           job={el}
  //         />
  //       ))}
  //     </>
  //   )
  // }

  if (loading) {
    return <div>loading</div>
  }

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
