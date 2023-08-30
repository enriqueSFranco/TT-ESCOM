// import { useEffect, useState, useRef } from "react"
import { ItemList } from "../components/ItemList";
import { Avatar } from "../components/Avatar";
import { CardExperience } from "../components/CardExperience";
import { Chip } from "../components/Chip";
import { type Candidate } from "../shared";
// import { useGetSkills, useLanguageUser, useAcademicHistorial } from "hooks"
// import { getProjects } from "services"
// import CustomAvatar from "components/Avatar/Avatar"
// import Chip from "components/Chip/Chip"
// import CardPersonalInfo from "./Card/CardPersonalInfo"

// const menuItems = [
//   { id: 0, label: "Información Profesional", icon: <ImProfile /> },
//   { id: 1, label: "Ver curriculumn", icon: <FiFileText /> },
// ]

const stack = [
  "reactjs",
  "vuejs",
  "typescript",
  "javascript",
  "tailwindcss",
  "kotlin",
];
const experience = [
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
];

const languages = [
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
];

/**
 * @param {String} value
 **/
// function formatPhone (value) {
//   if (value === null) return
//   let parseValue = String(value)
//   let number = parseValue.slice(0, 2)
//   let firstPart = parseValue.slice(2, 6)
//   let secondPart = parseValue.slice(6, 10)
//   let newFormatPhone = `${number} ${firstPart} ${secondPart}`
//   return newFormatPhone
// }

// function generateLevel (level) {
//   let result = ""
//   if (level >= 30 && level <= 50) return (result += "Básico")
//   if (level >= 51 && level <= 60) return (result += "Intermedio")
//   if (level >= 61 && level <= 100) return (result += "Avanzado")
// }

interface ProfileCandidateProps {
  user: Candidate;
}

const ProfileCandidate: React.FC = () => {
  // const [selectedId, setSelectedId] = useState(menuItems[0].id)
  // const [listProjects, setListProjects] = useState(null)
  // const [stepWidth, _] = useState(0)
  // const listRef = useRef(null)
  // const isMonted = useRef(true)
  // const indicatorRef = useRef(null)
  // const { historial } = useAcademicHistorial(user?.t100_id_student)
  // const { skills } = useGetSkills(user?.t100_id_student)
  // const { languages } = useLanguageUser(user?.t100_id_student)

  // let idUser = user?.t100_id_student

  // useEffect(() => {
  //   getProjects(idUser)
  //     .then((response) => {
  //       setTimeout(() => {
  //         if (isMonted.current) setListProjects(response)
  //       }, 2000)
  //     })
  //     .catch((error) => console.error(error))

  //   return () => (isMonted.current = false)
  // }, [idUser])

  return (
    <div className='w-full p-4 text-sm text-slate-300 flex flex-col divide-y divide-slate-700'>
      <header className='w-full h-20 flex items-center justify-start'>
        <Avatar photo={new URL("https://unavatar.io/github/enriqueSFranco")} />
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
      <article className='w-full flex flex-col flex-1 gap-8 divide-y divide-slate-700'>
        <section className='w-full flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>conocimientos</h2>
          <ItemList
            data={stack}
            render={(it) => <Chip label={it} />}
          />
        </section>

        <section className='w-full h-2/3 flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>experiencia</h2>
          <ItemList
            data={experience}
            render={(it) => <CardExperience experience={it} />}
          />
        </section>

        <section className='w-full h-auto flex flex-col gap-4'>
          <h2 className='capitalize font-bold'>idiomas</h2>
          <ItemList
            data={languages}
            render={({ language, fluency }) => (
              <Chip label={`${language} - ${fluency}`} />
            )}
          />
        </section>
      </article>
    </div>
  );
};

{
  /* <a
          href={`https://wa.me/${t100_phonenumber}?text=¡Estoy interesado!`}
          rel="noopener"
          target="_blanck"
        >
        </a> */
}

export default ProfileCandidate;
