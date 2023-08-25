// import { useTimeAgo } from "hooks";
import { Chip } from "./Chip"
import { type Job } from '../shared/interfaces'
import { parseThousands } from "../helpers"
import { IconBookMar } from "./Icon"

interface CardJobInterface {
  job: Job
}

const CardJob: React.FC<CardJobInterface> = ({ job }) => {
  // const timeago = useTimeAgo(time);
  // const elapsed = Math.abs(Math.round((time - now) / 1000 / 60));

  // const toggleActiveStyled = () => {
  //   return vacantId === cards.activeCard ? "active" : undefined;
  // };

  // const tags = [
  //   {
  //     label: isVacantRecommended
  //       ? `Exp: ${job?.t200_id_vacant?.c207_id_experience?.c207_description}`
  //       : `Exp: ${job?.c207_id_experience?.c207_description}`,
  //   },
  //   {
  //     label: isVacantRecommended
  //       ? job?.t200_id_vacant?.t200_max_salary
  //         ? `Suledo mensual: $${parseThousands(
  //           job?.t200_id_vacant?.t200_max_salary
  //         )}-${parseThousands(job?.t200_id_vacant?.t200_max_salary)}`
  //         : "Sueldo no especificado"
  //       : job?.t200_max_salary
  //         ? `Sueldo mensual: $${parseThousands(
  //           job?.t200_min_salary
  //         )}-${parseThousands(job?.t200_max_salary)}`
  //         : "Sueldo no especificado",
  //   },
  //   {
  //     label: isVacantRecommended
  //       ? `Perfil academico: ${job?.t200_id_vacant?.c206_id_profile?.c206_description}`
  //       : `Modalidad: ${job?.c214_id_modality?.c214_description
  //         ? job?.c214_id_modality?.c214_description
  //         : "No especificada"
  //       }`,
  //   },
  // ];

  // function createMarkup () {
  //   return { __html: isVacantRecommended ? job.t200_id_vacant?.t200_description : job.t200_description };
  // }

  return (
    <article className="w-full h-48 flex flex-col justify-start items-start gap-4 border border-slate-300 rounded-md font-light text-slate-500 p-3">
      <header className="w-full flex items-center justify-between">
        <div className="w-ful flex items-center justify-between gap-4">
          {/* IMAGE */}
          <h3>{job.company}</h3>
          <h2>{job.title}</h2>
        </div>
        <button><IconBookMar /></button>
      </header>
      <div className="w-full h-full flex flex-col divide-y">
        <div className="h-full w-full">
          <p>{job.description}</p>
        </div>
        <footer className="w-full flex flex-1 items-end justify-center">
          <ul className="flex items-center flex-grow justify-between">
            <li>{job.location}</li>
            <li>{job.salary}</li>
            <li>{job.workType}</li>
            <li>{job.experienceLevel}</li>
          </ul>
        </footer>
      </div>
    </article>
  )
}

export default CardJob;
