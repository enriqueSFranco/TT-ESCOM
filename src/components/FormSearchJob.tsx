import { Loader } from './Loader'
import { BaseInput } from './BaseInput'
import { getFieldsValues, hasNonEmptyField } from '../helpers/form-utils'
import { Job } from '../shared/interfaces.d'
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
      findJobs()
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
      className='w-full flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row'
    >
      <div className='w-full'>
        <BaseInput
          type='text'
          name='job'
          placeholder='Desarrollador Backend'
          autoFocus
          autoComplete='off'
        />
        {/* <input
          type='text'
          id='job'
          name='job'
          ref={inputRef}
          value={query}
          className='w-full outline-none border-none indent-3'
          onChange={handleFilterJob}
          onBlur={() => {
            setTimeout(() => {
              setFilterDataAutocomplete([])
            }, 200)
          }}
          autoComplete='off'
          placeholder='Desarrollador Backend'
        /> */}
        {/* <ul>
            {filterDataAutocomplete &&
              filterDataAutocomplete?.map((value) => (
                <li
                  key={crypto.randomUUID()}
                  value={value?.t200_job}
                  onClick={() => handleClick(value?.t200_job)}
                >
                  {value?.t200_job}
                </li>
              ))}
          </ul> */}
      </div>
      {/* <Separator></Separator> */}
      <div className='w-full'>
        <BaseInput
          type='text'
          name='location'
          autoComplete='off'
          placeholder='Ciudad de Mexico'
        // value={locationJob}
        // onChange={(e) => setLocationJob(e.target.value)}
        />
      </div>
      <button className='w-full py-1 bg-blue-600 rounded-sm font-light flex items-center justify-center text-white lg:w-auto lg:px-4 lg:py-2'>
        {/* {loading && <Loader width={20} height={20} colorHex='#fff' />} */}
        Buscar
      </button>
    </form>

  )
}

export default FormSearchJob
