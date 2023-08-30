import BaseButton from "./BaseButton"
import { IconAcademic, IconBriefcase, IconCalendar, IconClock, IconLocation, IconMoney } from "./Icon"
import { BaseInput } from "./BaseInput"
import { Box } from "./Box"
import { TextEditor } from "./TextEditor"

const FormCreateJob = () => {

  function handleSubmit (e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target
    if ($form instanceof HTMLFormElement) {
      // recuperamos los fields
      const fields = new FormData($form)
      const formValues: Record<string, string> = {}

      fields.forEach((value, key) => {
        formValues[key] = value.toString()
      })

      // TODO: IMPLEMENTAR UN SERVICIO PARA ENVIAR LA VACANTE A LA API
    }
  }

  return (
    <div className="w-full h-full p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Box className="flex flex-col gap-2">
          <h2 className="font-light text-slate-400 text-sm">Ocupación / Titulo de la vacante</h2>
          <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
            <IconBriefcase />
            <BaseInput name="title" placeholder="Desarrollador Backed" />
          </Box>
        </Box>

        <Box className="flex flex-col gap-2">
          <h2 className="font-light text-slate-400 text-sm">Detalles de la vacante</h2>
          <TextEditor />
        </Box>

        <Box className="flex flex-col gap-2">
          <h2 className="font-light text-slate-400 text-sm">Ubicación</h2>
          <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
            <IconLocation />
            <BaseInput name="location" placeholder="Ciudad de México" />
          </Box>
        </Box>

        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconClock />
          <select name="" id="" className="w-full h-full bg-transparent border-none outline-none">
            <option>tiempo completo</option>
            <option>medio tiempo</option>
            <option>por contrato</option>
          </select>
        </Box>

        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <select name="" id="">
            <option>inter</option>
            <option>junior</option>
            <option>semi-senior</option>
            <option>senior</option>
          </select>
        </Box>

        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <BaseInput name="knowledge" placeholder="conocimientos requeridos" />
        </Box>

        <Box className="flex items-center  rounded-sm px-2 border border-slate-300">
          <IconAcademic />
          <select name="" id="">
            <option>licenciatura</option>
            <option>maestria</option>
            <option>bachiller</option>
            <option>no aplica</option>
          </select>
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
    </div>
  )
}

export default FormCreateJob