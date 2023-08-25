import { Link } from "react-router-dom"
import FormSearchJob from "../components/FormSearchJob"

export const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between bg-white">
      <h1 className="font-semibold">TrabajaYA</h1>
      <nav className="w-2/3 h-full flex items-center justify-between text-sm">
        <FormSearchJob />
        <ul className="w-full flex flex-col justify-end items-center gap-4 font-light lg:flex-row">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/crear-cuenta-empresa'>Ingresar como Empresa</Link></li>
          <li><Link to='/crear-cuenta-candidato'>Ingresar como Candidato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
