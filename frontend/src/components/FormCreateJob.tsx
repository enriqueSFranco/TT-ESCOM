import { useRef, useState } from 'react'
import { useRecruiterActions } from '../hooks/useRecruterActions'
import { getFieldsValues } from '../helpers'
import { BaseButton } from './base-button'
import { BaseInput } from './base-input'
import { Box } from './box'
import { TextEditor } from './TextEditor'
import { IconAcademic, IconBriefcase, IconCalendar, IconClock, IconLocation, IconMoney } from './icon'
import { BaseSelect } from './base-select'

const EDUCATIONAL_LEVELS = [
  { value: 'licenciatura', label: 'Licenciatura' },
  { value: 'maestria', label: 'Maestría' },
  { value: 'bachiller', label: 'Bachiller' },
  { value: 'no_aplica', label: 'No aplica' }
]

const JOB_LEVELS = [
  { value: 'inter', label: 'Inter' },
  { value: 'junior', label: 'Junior' },
  { value: 'semi-senior', label: 'Semi-Senior' },
  { value: 'senior', label: 'Senior' }
]

const EMPLOYMENT_TYPES = [
  { value: 'full_time', label: 'Tiempo completo' },
  { value: 'part_time', label: 'Medio tiempo' },
  { value: 'contract', label: 'Por contrato' }
]

function validateForm (form: Record<string, string>): boolean {
  return Object.values(form).some(field => field.trim() === '')
}

const FormCreateJob = () => {
  const [selectedGrade, setSelectedGrade] = useState('Licenciatura')
  const [selectedJobLevel, setSelectedJobLevel] = useState('Inter')
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('Tiempo completo')

  const editorRef = useRef(null)
  const { createNewJob } = useRecruiterActions()

  function handleSubmit (e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target
    const $editor = editorRef.current

    // recuperamos los fields
    const fields = new FormData($form)

    if ($editor != null) {
      let editorValue = $editor.editorValue()
      fields.append('jobDetails', editorValue)
    }

    if ($form instanceof HTMLFormElement) {

      const formValues = getFieldsValues(fields)
      fields.append('id', crypto.randomUUID())

      if (validateForm(formValues)) {
        console.log('faltan campos por completar')
      } else {
        console.log('creando nuevo empleo')
        createNewJob(formValues)
        $form.reset()
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='h-full p-4 flex flex-col gap-4 lg:w-1/2'>
      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Ocupación / Titulo de la vacante</h2>
        <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
          <IconBriefcase />
          <BaseInput name='title' placeholder='Desarrollador Backed' />
        </Box>
      </Box>

      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Detalles de la vacante</h2>
        <TextEditor ref={editorRef} />
      </Box>

      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Ubicación</h2>
        <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
          <IconLocation />
          <BaseInput name='location' placeholder='Ciudad de México' />
        </Box>
      </Box>

      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Tiempo</h2>
        <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
          <IconClock />
          <BaseSelect
            name='jobType'
            value={selectedEmploymentType}
            onChange={value => setSelectedEmploymentType(value)}
            options={EMPLOYMENT_TYPES}
          />
        </Box>
      </Box>

      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Experiencia</h2>
        <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
          <BaseSelect
            name='experience'
            value={selectedJobLevel}
            onChange={value => setSelectedJobLevel(value)}
            options={JOB_LEVELS}
          />
        </Box>
      </Box>
      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Conocimientos requeridos</h2>

        <Box className='flex items-center  rounded-sm border border-slate-300'>
          <BaseInput name='knowledge' placeholder='conocimientos requeridos' />
        </Box>
      </Box>

      <Box className='flex flex-col gap-2'>
        <h2 className='font-light text-slate-400 text-sm'>Grado de estudios</h2>
        <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
          <IconAcademic />
          <BaseSelect
            name='grade'
            value={selectedGrade}
            onChange={(value) => setSelectedGrade(value)}
            options={EDUCATIONAL_LEVELS}
          />
        </Box>
      </Box>

      <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
        <IconCalendar />
        <BaseInput type='date' name='dateInit' placeholder='fecha de inicio' className='appearance-none' />
      </Box>

      <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
        <IconCalendar />
        <BaseInput type='date' name='dateLimitApply' placeholder='Fecha Límite de Aplicación' className='appearance-none' />
      </Box>

      <Box className='flex items-center  rounded-sm px-2 border border-slate-300'>
        <IconMoney />
        <BaseInput name='salary' placeholder='salario' />
      </Box>
      <footer className='w-full flex items-center justify-center'>
        <BaseButton size={{ width: 100, height: 100 }}>Enviar a revisión</BaseButton>
      </footer>
    </form>

  )
}

export default FormCreateJob