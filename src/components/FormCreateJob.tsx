import { BaseInput } from "./BaseInput"
import { Box } from "./Box"

const FormCreateJob = () => {
  return (
    <div>
      <form>
        <Box>
          <BaseInput placeholder="titulo de la vacant" />
        </Box>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <Box>
          <BaseInput placeholder="ubicación" />
        </Box>

        <select name="" id="">
          <option>tiempo completo</option>
          <option>medio tiempo</option>
          <option>por contrato</option>
        </select>

        <select name="" id="">
          <option>inter</option>
          <option>junior</option>
          <option>semi-senior</option>
          <option>senior</option>
        </select>

        <Box>
          <BaseInput placeholder="conocimientos requeridos" />
        </Box>

        <select name="" id="">
          <option>licenciatura</option>
          <option>maestria</option>
          <option>bachiller</option>
          <option>no aplica</option>
        </select>

        <Box>
          <BaseInput placeholder="fecha de inicio" />
        </Box>

        <Box>
          <BaseInput placeholder="Fecha Límite de Aplicación" />
        </Box>

        <Box>
          <BaseInput placeholder="salario" />
        </Box>
      </form>
    </div>
  )
}

export default FormCreateJob
