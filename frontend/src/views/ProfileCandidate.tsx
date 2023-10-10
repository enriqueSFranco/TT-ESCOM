// import { useEffect, useState, useRef } from "react"
import { useState } from "react"
import { ExperienceItem, LanguageItem, Direction } from "../shared"
import { ItemList } from "../components/ItemList"
import { Avatar } from "../components/Avatar"
import { CardExperience } from "../components/CardExperience"
import { Chip } from "../components/Chip"
// import { useGetSkills, useLanguageUser, useAcademicHistorial } from "hooks"
// import { getProjects } from "services"
// import CardPersonalInfo from "./Card/CardPersonalInfo"

const stack = [
  "reactjs",
  "vuejs",
  "typescript",
  "javascript",
  "tailwindcss",
  "kotlin",
]
const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    jobTitle: "Software Developer",
    description:
      "Developed web applications using modern technologies and frameworks.",
    date: new Date(),
    technologiesUsed: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    jobTitle: "Frontend Engineer",
    description:
      "Designed and implemented user interfaces for responsive web applications.",
    date: new Date(),
    technologiesUsed: ["HTML", "CSS", "Vue.js", "Sass"],
  },
  {
    id: 3,
    jobTitle: "Backend Developer",
    description:
      "Built robust APIs and server-side logic for scalable web services.",
    date: new Date(),
    technologiesUsed: ["Python", "Django", "PostgreSQL", "REST"],
  },
  {
    id: 4,
    jobTitle: "Full Stack Developer",
    description:
      "Contributed to end-to-end development of web applications, from frontend to backend.",
    date: new Date(),
    technologiesUsed: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    jobTitle: "UI/UX Designer",
    description:
      "Created intuitive and visually appealing user interfaces for digital products.",
    date: new Date(),
    technologiesUsed: ["Figma", "Sketch", "Adobe XD"],
  },
]

const languages: LanguageItem[] = [
  {
    language: "English",
    fluency: "Advanced",
  },
  {
    language: "Spanish",
    fluency: "Native",
  },
  {
    language: "French",
    fluency: "Intermediate",
  },
]

const ProfileCandidate: React.FC = () => {
  const [experience, updateExperience] = useState<ExperienceItem[] | null>(experienceItems)

  // let idUser = user?.t100_id_student

  return (
    <>
      <article className='w-full flex flex-col flex-1 gap-8 divide-y divide-slate-700'>
        <header className='w-full h-20 flex items-center justify-start gap-4'>
          <Avatar photo={new URL("https://unavatar.io/github/enriqueSFranco")} size={70} />
          <div className='w-full h-full flex flex-col items-start justify-start'>
            <h2 className='text-white font-bold'>Enrique SFranco</h2>
            <ul className='flex flex-wrap items-center gap-2 text-slate-400'>
              <li>experiencia</li>
              <li>ubicacion</li>
              <li>username</li>
              <li>puesto</li>
            </ul>
          </div>
        </header>
        <section className='w-full flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>conocimientos</h2>
          <ItemList
            data={stack}
            direction={Direction.ROW}
            emptyMessage="No hay conocimientos registrados."
            render={(it) => <Chip label={it} />}
          />
        </section>

        <section className='w-full h-2/3 flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>experiencia</h2>
          <ItemList
            data={experience ? experience : []}
            direction={Direction.COLUMN}
            emptyMessage="No hay experiencia registrados."
            render={(it) => <CardExperience experience={it} />}
          />
        </section>

        <section className='w-full h-auto flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>idiomas</h2>
          <ItemList
            data={languages}
            direction={Direction.ROW}
            emptyMessage="No hay idiomas registrados."
            render={({ language, fluency }) => (
              <Chip label={`${language} - ${fluency}`} />
            )}
          />
        </section>
      </article>
    </>
  )
}

export default ProfileCandidate
