import { Loader } from './Loader'
import { BaseInput } from './BaseInput'
import { getFieldsValues, hasNonEmptyField } from '../helpers/form-utils'
import { IconLocation, IconSearch } from './Icon'
// import { useDebounce, useViewport } from 'hooks'
// import { searchCharacter, searchJob } from 'services'

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
  }

  return (
    <form
      onSubmit={handleSubmit}
      role='search'
      className='flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row lg:w-2/3 lg:h-12 lg:overflow-hidden lg:rounded-full'
    >
      <div className='w-full h-full flex items-center lg:bg-gray-100/75 rounded-sm px-2 lg:rounded-full'>
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
      <div className='w-full h-full flex items-center lg:bg-gray-100/75 rounded-sm px-2 lg:rounded-full'>
        <IconLocation />
        <BaseInput
          type='text'
          name='location'
          autoComplete='off'
          placeholder='Ciudad de Mexico'
          className='w-full'
        />
      </div>
      <button className='h-full py-2 bg-blue-500 rounded-sm font-light flex items-center justify-center text-white lg:h-full lg:w-80 lg:capitalize lg:p-0 lg:rounded-full lg:hover:bg-blue-600'>
        {/* {loading && <Loader width={20} height={20} colorHex='#fff' />} */}
        buscar empleos
      </button>
    </form>

  )
}
