import { Link } from "react-router-dom"

export const AsideMenu = () => {
  return (
    <aside className="w-auto h-auto fixed top-12 right-4 bg-black/75 text-sm font-light border border-slate-800 p-4 rounded-lg">
      <ul className="w-full flex flex-col items-end gap-4 font-light">
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/crear-cuenta-empresa'>¿Eres Empresa?</Link></li>
        <li><Link to='/crear-cuenta-candidato'>¿Eres Candidato?</Link></li>
      </ul>
    </aside>
  )
}