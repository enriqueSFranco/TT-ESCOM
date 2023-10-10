import { ApplicationItem } from '../shared/interfaces'

interface CardJobOfferProps {
  jobOffer: ApplicationItem
}

export const CardJobOffer: React.FC<CardJobOfferProps> = ({ jobOffer }) => {
  const { company, location, title } = jobOffer

  return (
    <article className='w-full h-full border border-slate-700 rounded-lg font-light p-4 shadow-lg shadow-slate-300'>
      <header>
        <figure>
          <img src="" alt={company} />
          <figcaption>
            <h2>{title}</h2>
            <h3>{company}</h3>
          </figcaption>
        </figure>
      </header>
      <footer>
        <p>ubicación{location}</p>
      </footer>
    </article>
  )
}
