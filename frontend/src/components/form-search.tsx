import { Loader } from './Loader'
import { BaseInput } from './base-input'
import { getFieldsValues, hasNonEmptyField } from '../helpers/form-utils'
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

// function findJobs (jobs: Job[], titleJob: string) {
//   const matched = jobs.filter(job => job.title.toLowerCase().includes(titleJob.toLowerCase()))
//   return matched
// }

export const FormSearchJob: React.FC = () => {
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
      className='
        flex flex-col items-center justify-between gap-4 overflow-hidden 
        lg:flex-row lg:w-1/2 lg:h-12 lg:overflow-hidden
      '
    >
      <div className='w-full h-full flex items-center rounded-sm px-2 lg:border lg:border-gray/30  lg:rounded-full'>
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
      <div className='w-full h-full flex items-center rounded-sm px-2 lg:border lg:border-gray/30  lg:rounded-full'>
        <IconLocation />
        <BaseInput
          type='text'
          name='location'
          autoComplete='off'
          placeholder='Ciudad de Mexico'
        />
      </div>
      <button className='bg-black rounded-sm font-light flex items-center justify-center capitalize text-white lg:w-1/2 lg:p-3 lg:rounded-full'>
        {/* {loading && <Loader width={20} height={20} colorHex='#fff' />} */}
        buscar empleos
      </button>
    </form>

  )
}
