import { Link, useNavigate } from "react-router-dom"
import { useFetchJobByTitle } from "../hooks/useFetchJobByTitle"
import { Toaster, toast } from 'sonner'
import { IconArrowLeft, IconBookMar, IconInstagram } from "../components/Icon"
import { Box } from "../components/box"
// import { useModal } from "hooks/useModal"
// import { getJob, getJobRequirements } from "services/jobs/index"
// import { applyJob } from "services/students/index"
// import { uuid } from "utils/uuid"
// import { numberFormat } from "utils/numberFormat"
// import { useAuth } from "context/AuthContext"
// import Modal from "components/Modal/Modal"
// import Chip from "@mui/material/Chip"
// import Skeleton from "../components/Skeleton/Skeleton"
// import Confirm from "components/Alert/Confirm/Confirm"

const DetailsJob = () => {
  const navigate = useNavigate()
  const { job, loading } = useFetchJobByTitle()
  // const { token } = useAuth()
  // const [isOpen, openModal, closeModal] = useModal()
  // let typeUser = token?.user?.user_type

  function submitJobApplication () {
    // TODO: SERVICIO PARA ENVIAR LA SOLICITUD DE LA POSTULACION A UNA VACANTE
    toast.success('¡Postulación enviada!')
  }

  // useEffect(() => {
  //   getJobRequirements(t200_id_vacant)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const { data } = response
  //         setRequirements(data)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [t200_id_vacant])

  // const handleApplyJob = async () => {
  // const response = await applyJob({
  //   t200_id_vacant,
  //   t100_id_student: token?.user?.user_id,
  //   c205_id_application_state: 1,
  //   t201_date_application:
  //     now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
  // })
  // if (response.status === 201)
  //   setIsApplyJob({
  //     succes: response.status,
  //     message: response.data.message,
  //   })
  // else
  //   setIsApplyJob({
  //     success: response.status,
  //     message: response.data.message,
  //   })
  // }
  return (
    <>
      {loading ? (
        <section className="w-full h-screen grid place-items-center">
          <h2>cargando detalles de la vacante...</h2>
        </section>
      ) : (
        // <Skeleton type="businessDetails" />
        <section className='w-full h-screen flex flex-col items-center font-light text-sm p-4'>
          <Toaster position="top-center" richColors />
          <header className='w-full h-16 flex items-center justify-between'>
            <Link to="/" className="flex items-center capitalize font-light"><IconArrowLeft /></Link>
            <h2 className="font-semibold tracking-wide">Detalles de la vacante</h2>
            <button><IconBookMar /></button>
          </header>
          <Box as='article' className='h-full w-full flex flex-col flex-1'>
            <figure className="w-full flex flex-col items-center justify-center gap-2">
              {/* <img src="" alt="" /> */}
              <IconInstagram />
              <figcaption className="flex flex-col items-center justify-center gap-1 capitalize">
                <h2 className="font-semibold">{job?.title}</h2>
                <ul className="w-full flex items-center justify-between">
                  <li>
                    <h2 className="font-semibold">{job?.company}</h2>
                  </li>
                  <li>
                    <h2 className="font-semibold">{job?.location}</h2>
                  </li>
                </ul>
              </figcaption>
            </figure>

            <Box className="">
              <h3>DESCRIPCION DE LA VACANTE</h3>
              <p className=''>{job?.description}</p>
              <div>
                <h3>OFRECEMOS</h3>
                prestaciones
              </div>
            </Box>
            <div>
              <p className=''>Salario:</p>
            </div>
            <div>
              <p className=''>Horario:</p>
            </div>
            <div>
              <h3>Experiencia</h3>
              <p className=''>3 años - 5 años</p>
            </div>
            <div className=''>
              <h3>Skills requeridas</h3>
              <ul className=''>
                <li>requirements</li>
              </ul>
            </div>
          </Box>
          <div className="w-full grid place-items-center fixed bottom-4">
            <button onClick={submitJobApplication} className="bg-blue-600 text-white px-4 py-2 rounded-md">Postularme a esta vacante</button>
          </div>
        </section>
      )}
    </>
  )
}

export default DetailsJob
