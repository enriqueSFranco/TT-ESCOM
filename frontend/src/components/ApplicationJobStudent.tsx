import { useModal } from "hooks"
import { formatCurrencyWithoutDecimals } from "helpers"
import { Chip } from "components/Chip"
// import ModalPortal from "components/Modal/ModalPortal"
// import "./ApplicationJobStudent.css"

type ApplicationJobProps = {
  jobName: string
  modality: string
  dateApplication: string
  description: string
  experience: string
  contract: string
  salary: number
}

// function createMarkup (isVacantRecommended, job) {
//   return {
//     __html: isVacantRecommended
//       ? job.t200_id_vacant?.t200_description
//       : job,
//   }
// }

export const ApplicationJob = ({
  jobName,
  salary,
  modality,
  dateApplication,
  experience,
  contract,
  description,
}: ApplicationJobProps) => {
  const [isOpen, openModal, closeModal] = useModal(false)

  return (
    <article>
      <header>
        <h2>{jobName}</h2>
        <span>Contratacion: {contract}</span>
      </header>
      <div>
        <Chip label={`$${formatCurrencyWithoutDecimals(salary).slice(4)}`} />
        <Chip label={modality ? "Presencial" : "Remoto"} />
        <Chip label={`${experience}`} />
      </div>
      <footer>
        <span>
          Fecha de postulacion: {formatCurrencyWithoutDecimals(dateApplication)}
        </span>
        <button onClick={() => openModal}>Ver detalles</button>
      </footer>
    </article>
  )
}

