import { Link } from "react-router-dom"
import { useMenu } from "../hooks"
import { StateMenu } from "../shared/enum"
import { Avatar } from "./Avatar"

export const FloatingMenu = () => {
  const { isOpenMenu } = useMenu()

  return (
    <aside className={`w-auto h-auto fixed top-12 right-4 bg-gray-100 text-sm font-light p-4 rounded-lg transition-all ${isOpenMenu === StateMenu.CLOSE ? "hidden" : "visible top-14"}`}>
      <ul className="w-full flex flex-col items-end gap-4 font-light">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reclutador/iniciar-sesion">¿Eres empresa?</Link></li>
        <li><Link to="/candidato/iniciar-sesion">¿Eres candidato?</Link></li>
        <li><Link to="/candidato/perfil" className="flex items-center gap-2"><Avatar photo={new URL("https://unavatar.io/github/enriqueSFranco")} size={30} /> Perfil</Link></li>
      </ul>
    </aside>
  )
}