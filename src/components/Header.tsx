import { Link } from "react-router-dom"
import FormSearchJob from "../components/FormSearchJob"
import { IconClose, IconMenu } from "./Icon"
import { useMenu } from "../hooks"
import { STATE_MENU } from "../shared/enum.d"

export const Header: React.FC = () => {
  const { isOpenMenu, handleToggle } = useMenu()

  return (
    <header className="w-full flex flex-col items-start justify-center gap-4 p-4 lg:h-20">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold">Trabaja<span className="text-blue-500">YA</span></h1>
        <button onClick={handleToggle}>{isOpenMenu === STATE_MENU.CLOSE ? <IconMenu /> : <IconClose />}</button>
      </div>
      <nav className="w-full h-full flex flex-col items-center justify-center text-sm">
        <FormSearchJob />
        <ul className="w-full hidden font-light opacity-0 invisible lg:opacity-100 lg:visible lg:flex-row">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='reclutador/iniciar-sesion'>Ingresar como Empresa</Link></li>
          <li><Link to='candidato/iniciar-sesion'>Ingresar como Candidato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
