import { useState } from "react"
// import AuthContext from "context/AuthContext"
// import { getJobsForRecruiter } from "services/recruiter"
// import { uuid } from "utils/uuid"
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob"

const jobs = [
  {
    id: 1,
    titulo: "Desarrollador Web Senior",
    descripcion: "Buscamos un desarrollador web con experiencia en HTML, CSS y JavaScript para trabajar en proyectos emocionantes.",
    ubicacion: "Ciudad de México",
    tipo: "Tiempo completo",
    categoria: "Tecnología",
    nivelExperiencia: "Senior",
    habilidadesRequeridas: ["HTML", "CSS", "JavaScript", "React"],
    educacionRequerida: "Licenciatura en Informática",
    fechaInicio: new Date(),
    fechaLimiteAplicacion: new Date(),
    salario: "$50,000 - $70,000 MXN"
  },
  {
    id: 2,
    titulo: "Ejecutivo de Ventas",
    descripcion: "Estamos en busca de un ejecutivo de ventas con habilidades excepcionales de comunicación para promover nuestros productos.",
    ubicacion: "Guadalajara",
    tipo: "Medio tiempo",
    categoria: "Ventas",
    nivelExperiencia: "Junior",
    habilidadesRequeridas: ["Comunicación", "Ventas", "Negociación"],
    educacionRequerida: "Bachillerato",
    fechaInicio: new Date(),
    fechaLimiteAplicacion: new Date(),
    salario: "Comisión + Bonos"
  }
]

const mappedJobOffer = jobs.map(job => ({
  id: job.id,
  title: job.titulo,
  description: job.descripcion,
  location: job.ubicacion,
  jobType: job.tipo,
  jobCategory: job.categoria,
  levelExperience: job.nivelExperiencia,
  skills: job.habilidadesRequeridas,
  education: job.educacionRequerida,
  dateInit: job.fechaInicio,
  dateLimitApplication: job.fechaLimiteAplicacion,
  salaty: job.salario
}))

const RecruiterJobs = () => {
  // const { token } = useContext(AuthContext)
  // const [listJobs, setListJobs] = useState(null)

  // useEffect(() => {
  //   getJobsForRecruiter(token?.user?.user_id)
  //     .then((response) => {
  //       if (response.status === 200) setListJobs(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [token?.user?.user_id])

  return (
    <section>
      <ul>
        {mappedJobOffer.map(job => (
          <li key={`jobOfferId-${job.id}`}>
            <article>
              <header>
                <h2>{job.title}</h2>
                <ul>
                  <li><span>{job.jobCategory}</span></li>
                  <li><span>{job.location}</span></li>
                  <li><span>{job.jobType}</span></li>
                </ul>
              </header>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecruiterJobs
