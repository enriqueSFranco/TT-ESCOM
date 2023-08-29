// import { useTimeAgo } from "hooks";
import { Link } from "react-router-dom"
import { type Job } from '../shared/interfaces'
import { formatCurrencyWithoutDecimals } from "../helpers"
import { IconBookMar } from "./Icon"

interface CardJobProps {
  job: Job
}

export const CardJob: React.FC<CardJobProps> = ({ job }) => {
  return (
    <Link to={`/job/${encodeURIComponent(job.title)}`} className="text-slate-300">
      <article className="w-full h-48 flex flex-col justify-start items-start gap-4 bg-gray-900/75 border border-slate-700 rounded-lg font-light p-4">
        <header className="w-full flex items-center justify-between">
          <figure className="w-ful flex items-center justify-between gap-4">
            {/* IMAGE */}
            <img src="" alt={job.company} />
            <figcaption className="w-full h-full font-bold">
              <h3>{job.company}</h3>
              <h2>{job.title}</h2>
            </figcaption>
          </figure>
          <button><IconBookMar /></button>
        </header>
        <div className="w-full h-full flex flex-col divide-y divide-slate-700">
          <div className="h-full w-full">
            <p>{job.description}</p>
          </div>
          <footer className="w-full h-12 flex items-end justify-center">
            <ul className="flex items-center flex-grow justify-between">
              <li>{job.location}</li>
              <li>{formatCurrencyWithoutDecimals(job.salary)}</li>
              <li>{job.workType}</li>
              <li>{job.experienceLevel}</li>
            </ul>
          </footer>
        </div>
      </article>
    </Link>
  )
}
