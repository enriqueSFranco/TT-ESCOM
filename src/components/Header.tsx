import { Link } from "react-router-dom"
import FormSearchJob from "../components/FormSearchJob"
import { IconMenu } from "./Icon"

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-start justify-center gap-4 p-4 lg:h-20">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold">Trabaja<span className="text-blue-500">YA</span></h1>
        <button><IconMenu /></button>
      </div>
      <nav className="w-full h-full flex flex-col items-center justify-center text-sm">
        <FormSearchJob />
        <ul className="w-full hidden font-light opacity-0 invisible lg:opacity-100 lg:visible lg:flex-row">
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/crear-cuenta-empresa'>Ingresar como Empresa</Link></li>
          <li><Link to='/crear-cuenta-candidato'>Ingresar como Candidato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
