import { Chip } from "./Chip"

interface ExperienceItem {
  id: number
  jobTitle: string
  description: string
  date: Date
  technologiesUsed: string[]
}

interface CardExperienceProps {
  experience: ExperienceItem
}

export const CardExperience: React.FC<CardExperienceProps> = ({ experience }) => {
  return (
    <article className="w-full h-auto flex flex-col gap-4 bg-slate-900/75 p-4 rounded-md">
      <header className="w-full flex items-start gap-4">
        <picture className="w-12 h-12 overflow-hidden shadow-lg">
          <img src="https://unavatar.io/github/meta" alt="empresa" className="object-cover rounded-full" />
        </picture>
        <div className="flex flex-col gap-1">
          <h2>{experience.jobTitle}</h2>
          <h3>{(experience.date).toLocaleDateString()}</h3>
        </div>
      </header>
      <div className="w-full">
        <p className="whitespace-pre-line align-middle">{experience.description}</p>
      </div>
      <div className="flex flex-1 flex-col items-start justify-end gap-4">
        <h2 className="capitalize text-xs">tecnologias</h2>
        <ul className="flex flex-wrap items-center justify-start gap-2">
          {experience.technologiesUsed.map(techology => (
            <li key={`techology-${techology}`}><Chip label={techology} /></li>
          ))}
        </ul>
      </div>
    </article>
  )
}
