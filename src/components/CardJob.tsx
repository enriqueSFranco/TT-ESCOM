// import { useTimeAgo } from "hooks";
import { Link } from "react-router-dom"
import { useCandidateActions } from "../hooks"
import { type Job } from '../shared/interfaces'
import { formatCurrencyWithoutDecimals } from "../helpers"
import { Box } from "./Box"
import { IconBookMar, IconClock, IconInstagram } from "./Icon"

interface CardJobProps {
  job: Job
}

export const CardJob: React.FC<CardJobProps> = ({ job }) => {
  const { saveJob } = useCandidateActions()

  const handleSaveJob = (job: Job) => () => saveJob(job)

  return (
    <Link to={`/job/${encodeURIComponent(job.title)}`} className="text-slate-500 text-sm z-10">
      <article className="w-full flex flex-col justify-start items-start gap-4 bg-gray-100/75 rounded-xl font-light p-4">
        <header className="w-full flex items-center justify-between">
          <figure className="w-ful flex items-center justify-between gap-4">
            {/* IMAGE */}
            <IconInstagram />
            {/* <img src="" alt={job.company} /> */}
            <figcaption className="w-full h-full tracking-wide">
              <h3 className="">{job.company}</h3>
              <h2 className="text-black font-semibold">{job.title}</h2>
            </figcaption>
          </figure>
          <button onClick={handleSaveJob(job)} className="z-10"><IconBookMar /></button>
        </header>
        <div className="w-full h-full flex flex-col divide-y divide-slate-700">
          <div className="h-full w-full">
            <p>{job.description}</p>
          </div>
        </div>
        <footer className="w-full h-auto flex items-end justify-start">
          <ul className="flex items-center flex-wrap gap-4">
            <li><span>{formatCurrencyWithoutDecimals(job.salary)}</span></li>
            <li><span>{job.requirements}</span></li>
            <li>
              <Box className="flex items-center gap-1">
                <IconClock size={14} />
                <span>{job.applicantCount}</span>
              </Box>
            </li>
          </ul>
        </footer>
      </article>
    </Link>
  )
}
