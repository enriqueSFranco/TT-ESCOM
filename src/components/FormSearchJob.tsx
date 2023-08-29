import { Loader } from './Loader'
import { BaseInput } from './BaseInput'
import { getFieldsValues, hasNonEmptyField } from '../helpers/form-utils'
import { Job } from '../shared/interfaces.d'
import { IconLocation, IconSearch } from './Icon'
// import { useDebounce, useViewport } from 'hooks'
// import { searchCharacter, searchJob } from 'services'
// import styles from './Search.module.css'
// import {
//   Button,
//   Form,
//   input,
//   Separator,
//   div,
//   WrapperForm,
// } from './styled-components/FormSearchStyled'

function findJobs (jobs: Job[], titleJob: string) {
  const matched = jobs.filter(job => job.title.toLowerCase().includes(titleJob.toLowerCase()))
  return matched
}

const FormSearchJob: React.FC = () => {
  // const debounce = useDebounce(query, 500)
  // const [viewport] = useViewport()

  // filtrado para el autocompletado
  const handleFilterJob = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const $form = e.target as HTMLFormElement
    const fileds = new FormData($form)
    const job = fileds.get('job') as string
    const location = fileds.get('location') as string

    if (!job.trim().length || !location.trim().length) {
      console.log({ job, location })
      // searchCharacter(query)
      //   .then((res) => {
      //     const { results } = res
      //     setFilterDataAutocomplete(results)
      //   })
      //   .catch((error: Error) => {
      //     if (error instanceof Error) {
      //       throw new Error(`Error: ${error.message}`)
      //     }
      //   })
    }
    return
  }

  // const handleClick = (job) => updatedQuery(job)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const fields = new FormData($form)

    const fieldValues = getFieldsValues(fields)

    const isAnyFieldNotEmpty = hasNonEmptyField(fieldValues)

    if (isAnyFieldNotEmpty) {

      // TODO: IMPLEMENTAR SERVICIO DE BUSQUEDA
    }

    return
    // setLoading(true)
    // setTimeout(() => {
    //   updatedQuery(debounce)
    //   // updatedQueryAux(debounce)
    //   searchJob({
    //     'Texto a buscar': debounce,
    //     Donde: locationJob,
    //     'Modalidad de empleo': [],
    //     'Experiencia laboral': [],
    //   })
    //     .then((response) => {
    //       const { result } = response
    //       // console.log(response)
    //       setFilterData(result)
    //     })
    //     .catch((error) => console.error(error))
    //   setLoading(false)
    //   // handleSearch(debounce === '' ? filterDataAutocomplete : debounce)
    // }, 500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      role='search'
      className='w-full flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row lg:border lg:border-white/30 lg:h-12 lg:overflow-hidden lg:rounded-full'
    >
      <div className='w-full h-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:divide-x'>
        <div className='flex items-center bg-white/10 rounded-sm px-2'>
          <IconSearch />
          <BaseInput
            type='text'
            name='job'
            aria-label='Search jobs'
            placeholder='Desarrollador Backend'
            autoFocus
            autoComplete='off'
          />
        </div>
        <div className='flex items-center bg-white/10 rounded-sm px-2'>
          <IconLocation />
          <BaseInput
            type='text'
            name='location'
            autoComplete='off'
            placeholder='Ciudad de Mexico'
          />
        </div>
      </div>
      <button className='w-full h-full py-2 bg-blue-500 rounded-sm font-light flex items-center justify-center text-white lg:w-14 lg:h-full lg:p-0 lg:rounded-full lg:hover:bg-blue-600'>
        {/* {loading && <Loader width={20} height={20} colorHex='#fff' />} */}
        Buscar
      </button>
    </form>

  )
}

export default FormSearchJob
