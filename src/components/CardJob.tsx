// import { useTimeAgo } from "hooks";
import { Link } from "react-router-dom"
import { type Job } from '../shared/interfaces'
import { formatCurrencyWithoutDecimals } from "../helpers"
import { Box } from "./Box"
import { IconClock, IconInstagram } from "./Icon"
import { Chip } from "./Chip"

interface CardJobProps {
  job: Job
}

export const CardJob: React.FC<CardJobProps> = ({ job }) => {

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
        </header>
        <div className="w-full h-full flex flex-col divide-y divide-slate-700">
          <div className="h-full w-full">
            <p>{job.description}</p>
          </div>
        </div>
        <footer className="w-full h-auto flex items-end justify-start">
          <ul className="w-full flex items-center gap-2">
            <li>
              <Chip label={formatCurrencyWithoutDecimals(job.salary)} textColor="#008000" bgColor="#c7f9cc" />
            </li>
            <li>
              <Chip label={job.experienceLevel} textColor="#7371fc" bgColor="#f5efff" />
            </li>
            <li>
              <Chip label={job.workType} textColor="#4f6d7a" bgColor="#dbe9ee" />
            </li>
          </ul>
        </footer>
      </article>
    </Link>
  )
}
