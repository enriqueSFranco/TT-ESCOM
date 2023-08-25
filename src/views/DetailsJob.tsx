import { IconArrowLeft, IconBookMar, IconInstagram } from "../components/Icon"
import { useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
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

const token = null
const typeUser = "STUDENT"

const DetailsJob = () => {
  let elementRef = useRef(null)
  let navigate = useNavigate()
  const { title } = useParams()
  // const { token } = useAuth()
  // const [isOpen, openModal, closeModal] = useModal()
  const [loading, setLoading] = useState(false)
  // let typeUser = token?.user?.user_type
  // useEffect(() => {
  //   setLoading(true)
  //   getJob(t200_id_vacant)
  //     .then((response) => {
  //       setLoading(false)
  //       setJob(response)
  //       setIsApplyJob({})
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false))
  // }, [t200_id_vacant])

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

  const handleApplyJob = async () => {
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
  }

  return (
    <>
      {loading ? (
        <div>cargando informacion...</div>
      ) : (
        // <Skeleton type="businessDetails" />
        <section ref={elementRef} className='w-full h-full flex flex-col font-light text-sm'>
          <header className='w-full h-16 flex items-center justify-between px-4'>
            <Link to="/"><IconArrowLeft /></Link>
            <h2 className="capitalize">meta</h2>
            <button><IconBookMar /></button>
          </header>
          <article className='h-full flex flex-col flex-1'>
            <figure className="w-full flex flex-col items-center justify-center gap-2">
              {/* <img src="" alt="" /> */}
              <IconInstagram />
              <figcaption className="flex flex-col items-center justify-center gap-1 capitalize">
                <h2 className="font-semibold">desarrollador backend</h2>
              </figcaption>
            </figure>

            <p className=''>Perfil:</p>
            <p className=''>Tipo de contratacion:</p>
            <div>
              <h3>DESCRIPCION DE LA VACANTE</h3>
              <p className=''>descripcion</p>
            </div>
            <div>
              <h3>OFRECEMOS</h3>
              prestaciones
            </div>
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
                {/* {requirements?.map((requirement) => (
                  <li key={uuid()}>
                    <Chip
                      label={requirement?.c116_id_skill?.c116_description}
                    />
                  </li>
                ))} */}
              </ul>
            </div>
          </article>
          <div className="w-full grid place-items-center fixed bottom-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Postularme a esta vacante</button>
          </div>
        </section>
      )}
    </>
  )
}

export default DetailsJob
