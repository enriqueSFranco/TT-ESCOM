import { Link } from "react-router-dom"
import { useMenu } from "../hooks"
import { STATE_MENU } from "../shared/enum.d"

export const FloatingMenu = () => {
  const { isOpenMenu } = useMenu()

  return (
    <aside className={`w-auto h-auto fixed top-5 right-4 bg-black/75 text-sm font-light border border-slate-800 p-4 rounded-lg transition-all ${isOpenMenu === STATE_MENU.CLOSE ? "hidden" : "visible top-14"}`}>
      <ul className="w-full flex flex-col items-end gap-4 font-light">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reclutador/iniciar-sesion">¿Eres empresa?</Link></li>
        <li><Link to="/candidato/iniciar-sesion">¿Eres candidato?</Link></li>
        <li><Link to="/candidato/perfil">Perfil</Link></li>
      </ul>
    </aside>
  )
}