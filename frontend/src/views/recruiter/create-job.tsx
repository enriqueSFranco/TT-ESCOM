import { Link } from 'react-router-dom'
import { IconArrowLeft } from '../../components/icon'
import FormCreateJob from '../../components/FormCreateJob'

const CreateJob = () => {
  return (
    <section className='text-slate-900 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <header className='w-full h-16 flex items-center justify-between'>
        <Link to="/" className="flex items-center capitalize font-light"><IconArrowLeft /></Link>
        <div className='w-full h-full grid place-items-center'>
          <h2 className="font-semibold tracking-wide">Crear nueva vacante</h2>
        </div>
      </header>
      <FormCreateJob />
    </section>
  )
}

export default CreateJob