// import AuthContext from "context/AuthContext"
// import { getJobsForRecruiter } from "services/recruiter"
import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/store"
import { useRecruiterJobOffer } from "../hooks/useRecruter"
import { ItemList } from "../components/ItemList"
import { Direction } from "../shared"
import { IconArrowLeft, IconDelete } from "../components/Icon"

// const mappedJobOffer = jobs.map(job => ({
//   id: job.id,
//   title: job.titulo,
//   description: job.descripcion,
//   location: job.ubicacion,
//   jobType: job.tipo,
//   jobCategory: job.categoria,
//   levelExperience: job.nivelExperiencia,
//   skills: job.habilidadesRequeridas,
//   education: job.educacionRequerida,
//   dateInit: job.fechaInicio,
//   dateLimitApplication: job.fechaLimiteAplicacion,
//   salaty: job.salario
// }))

const RecruiterJobs = () => {
  const { jobOffers } = useAppSelector(state => state.recruiter)
  const { removeJob } = useRecruiterJobOffer()

  const handleRemoveJob = (jobId: number) => () => removeJob(jobId)

  return (
    <section className="w-full p-4">
      <header className='w-full h-16 flex items-center justify-between'>
        <Link to="/" className="flex items-center capitalize font-light"><IconArrowLeft /></Link>
        <div className='w-full h-full grid place-items-center'>
          <h2 className="font-semibold tracking-wide">Mis vacantes</h2>
        </div>
      </header>
      <ItemList
        data={jobOffers}
        direction={Direction.COLUMN}
        emptyMessage="Aun no tienes vacantes creadas."
        render={(job) => (
          <article className="w-full bg-gray-100/75 rounded-xl font-light p-4">
            <header className="w-full flex items-center justify-between gap-2">
              <h2>{job.title}</h2>
              <button onClick={handleRemoveJob(job.id)}><IconDelete /></button>
            </header>
          </article>
        )}
      />
    </section>
  )
}

export default RecruiterJobs
