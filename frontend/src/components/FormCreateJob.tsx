import { useRef } from "react"
import { useRecruiterActions } from "../hooks/useRecruterActions"
import { getFieldsValues } from "../helpers"
import BaseButton from "./BaseButton"
import { BaseInput } from "./BaseInput"
import { Box } from "./Box"
import { TextEditor } from "./TextEditor"
import { IconAcademic, IconBriefcase, IconCalendar, IconClock, IconLocation, IconMoney } from "./Icon"
import { BaseSelect } from "./BaseSelect"

function validateForm (form: Record<string, string>): boolean {
  return Object.values(form).some(field => field.trim() === '')
}

const FormCreateJob = () => {
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
    <form onSubmit={handleSubmit} className="w-full h-full p-4 flex flex-col gap-4">
      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Ocupación / Titulo de la vacante</h2>
        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconBriefcase />
          <BaseInput name="title" placeholder="Desarrollador Backed" />
        </Box>
      </Box>

      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Detalles de la vacante</h2>
        <TextEditor ref={editorRef} />
      </Box>

      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Ubicación</h2>
        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconLocation />
          <BaseInput name="location" placeholder="Ciudad de México" />
        </Box>
      </Box>

      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Tiempo</h2>
        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconClock />
          <BaseSelect name="jobType">
            <option>tiempo completo</option>
            <option>medio tiempo</option>
            <option>por contrato</option>
          </BaseSelect>
        </Box>
      </Box>

      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Experiencia</h2>
        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <BaseSelect name="experience">
            <option>inter</option>
            <option>junior</option>
            <option>semi-senior</option>
            <option>senior</option>
          </BaseSelect>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Conocimientos requeridos</h2>

        <Box className="flex items-center  rounded-sm border border-slate-300">
          <BaseInput name="knowledge" placeholder="conocimientos requeridos" />
        </Box>
      </Box>

      <Box className="flex flex-col gap-2">
        <h2 className="font-light text-slate-400 text-sm">Grado de estudios</h2>
        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconAcademic />
          <BaseSelect name="studyGrade">
            <option>licenciatura</option>
            <option>maestria</option>
            <option>bachiller</option>
            <option>no aplica</option>
          </BaseSelect>
        </Box>
      </Box>

      <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
        <IconCalendar />
        <BaseInput type="date" name="dateInit" placeholder="fecha de inicio" className="appearance-none" />
      </Box>

      <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
        <IconCalendar />
        <BaseInput type="date" name="dateLimitApply" placeholder="Fecha Límite de Aplicación" className="appearance-none" />
      </Box>

      <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
        <IconMoney />
        <BaseInput name="salary" placeholder="salario" />
      </Box>
      <BaseButton>Enviar a revisión</BaseButton>
    </form>

  )
}

export default FormCreateJob