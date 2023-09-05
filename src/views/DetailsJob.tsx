import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useCandidateActions } from "../hooks"
import { findJobByTitle } from "../services"
import { formatCurrencyWithoutDecimals } from "../helpers"
import { JobId, type Job } from "../shared"
import { Toaster, toast } from "sonner"
import { IconArrowLeft, IconBookMar, IconClock, IconInstagram, IconLocation, IconMoney } from "../components/Icon"
import { Box } from "../components/Box"
import BaseButton from "../components/BaseButton"
import { Avatar } from "../components/Avatar"
// import { getJob, getJobRequirements } from 'services/jobs/index'
// import { applyJob } from 'services/students/index'
// import { useAuth } from 'context/AuthContext'

const DetailsJob = () => {
  const { saveJob, removeJob } = useCandidateActions()
  const { title } = useParams()
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["job-details"],
    queryFn: () => findJobByTitle(decodeURIComponent(title ?? ''))
  })
  // const { job, loading } = useFetchJobByTitle()

  const handleSaveJob = (job: Job) => () => saveJob(job)

  const handleRemoveJob = (jobId: JobId) => () => removeJob(jobId)
  console.log('details', data)
  function submitJobApplication () {
    // TODO: SERVICIO PARA ENVIAR LA SOLICITUD DE LA POSTULACION A UNA VACANTE
    toast.success("¡Postulación enviada!")
  }
  // const handleApplyJob = async () => {
  // const response = await applyJob({
  //   t200_id_vacant,
  //   t100_id_student: token?.user?.user_id,
  //   c205_id_application_state: 1,
  //   t201_date_application:
  //     now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate(),
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

  if (isError || !data) {
    return <h2>Ocurrio algun error</h2>
  }

  return (
    <>
      {isLoading ? (
        <section className='w-full h-screen grid place-items-center'>
          <h2>cargando detalles de la vacante...</h2>
        </section>
      ) : (
        // <Skeleton type='businessDetails' />
        <Box as='section' className='w-full h-screen flex flex-col items-center font-light text-sm p-4'>
          <Toaster position='top-center' richColors />
          <Box as='header' className='w-full h-16 flex items-center justify-between'>
            <Link to='/' className='flex items-center capitalize font-light'>
              <IconArrowLeft />
            </Link>
            <h2 className='font-semibold tracking-wide'>
              Detalles de la vacante
            </h2>
            <BaseButton
              onClick={
                data.isFavorite
                  ? handleRemoveJob(data.id)
                  : handleSaveJob(data)
              }
            >
              <IconBookMar fill={data.isFavorite ? "#ffc300" : "#9CA3AF"} size={30} />
            </BaseButton>
          </Box>
          <Box as='article' className='h-full w-full flex flex-col flex-1'>
            <Box as='figure' className='w-full flex items-start justify-start gap-2'>
              {/* <img src='' alt='' /> */}
              <IconInstagram />
              <Box as='figcaption' className='flex flex-col capitalize'>
                <h2 className='font-semibold text-lg'>{data.title}</h2>
                <Box as='ul' className='w-full flex'>
                  <Box as='li'>
                    <Box className='flex items-center gap-2 text-slate-400 text-xs'>
                      <span>{data.company}</span>
                      <span className='flex items-center gap-0.5'><IconLocation size={14} />{data.location}</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="flex items-center gap-4 text-slate-400">
              <span>{(data.postedDate)}</span>
              {/* group avatars */}
              <Box as='ul' className="flex">
                <Box as='li'>
                  <Avatar photo={new URL('https://unavatar.io/instagram/willsmith')} size={22} />
                </Box>
                <Box as='li'>
                  <Avatar photo={new URL('https://unavatar.io/instagram/willsmith')} size={22} />
                </Box>
                <Box as='li'>
                  <Avatar photo={new URL('https://unavatar.io/instagram/willsmith')} size={22} />
                </Box>
              </Box>
              <span>{data.applicantCount} postulaciones</span>
            </Box>

            <Box as='ul' className="flex items-center justify-between gap-4">
              <Box as='li' className="w-full h-full flex flex-col items-center justify-center bg-gray-100/75 p-3 rounded-md">
                <IconMoney />
                <span>{formatCurrencyWithoutDecimals(data.salary)}</span>
              </Box>
              <Box as='li' className="w-full h-full flex flex-col items-center justify-center bg-gray-100/75 p-3 rounded-md">
                <IconClock />
                {data.workType}
              </Box>
              <Box as='li' className="w-full h-full flex flex-col items-center justify-center bg-gray-100/75 p-3 rounded-md">{data.experienceLevel}</Box>
            </Box>

            <Box className='w-full flex flex-col gap-2'>
              <h3 className="font-bold">Descripción de la vacante</h3>
              <p className=''>{data.description}</p>
            </Box>
          </Box>
          <Box as='footer' className='w-full grid place-items-center fixed bottom-4'>
            <BaseButton onClick={submitJobApplication} className="w-2/3 flex items-center justify-center text-white bg-blue-500 p-4 rounded-md">
              Postularme a esta vacante
            </BaseButton>
          </Box>
        </Box>
      )}
    </>
  )
}

export default DetailsJob
