import { Link } from "react-router-dom"
import { useMenu, useViewport } from "../hooks"
import { IconClose, IconMenu } from "./Icon"
import { Device, StateMenu } from "../shared/enum.d"
import { FloatingMenu } from "./FloatingMenu"
import { Blob } from "./Blob"

export const Header: React.FC = () => {
  const { isOpenMenu, handleToggle } = useMenu()
  const viewport = useViewport()

  return (
    <header className="relative w-full flex flex-col items-start justify-center gap-4 z-20 lg:h-16">
      <Blob />
      <div className="w-full h-full flex justify-between items-center">
        <h1 className="font-semibold">Trabaja<span className="text-blue-500">YA</span></h1>
        {viewport.device === Device.Desktop ? null : <button onClick={handleToggle}>{isOpenMenu === StateMenu.CLOSE ? <IconMenu /> : <IconClose />}</button>}
        <nav className="w-full h-full flex flex-col items-center justify-center text-sm">
          <ul className="w-full h-full font-light opacity-0 invisible lg:opacity-100 lg:visible lg:flex lg:flex-row lg:items-center lg:justify-end">
            <li><Link to='/' className="p-4">Inicio</Link></li>
            <li><Link to='reclutador/iniciar-sesion' className="p-4">Ingresar como Empresa</Link></li>
            <li><Link to='candidato/iniciar-sesion' className="p-4">Ingresar como Candidato</Link></li>
          </ul>
        </nav>
      </div>
      {/* TODO: IMPORT DINAMICO */}
      <FloatingMenu />
    </header>
  )
}
