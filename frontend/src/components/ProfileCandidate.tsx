// import { useEffect, useState, useRef } from "react"
import { type Candidate } from "../shared"
// import { useGetSkills, useLanguageUser, useAcademicHistorial } from "hooks"
// import { getProjects } from "services"
// import CustomAvatar from "components/Avatar/Avatar"
// import Chip from "components/Chip/Chip"
// import CardPersonalInfo from "./Card/CardPersonalInfo"

// const menuItems = [
//   { id: 0, label: "Información Profesional", icon: <ImProfile /> },
//   { id: 1, label: "Ver curriculumn", icon: <FiFileText /> },
// ]

const stack = ["reactjs", "vuejs", "typescript", "javascript", "tailwindcss", "kotlin"]
const experience = [
  {
    "id": 1,
    "jobTitle": "Software Developer",
    "description": "Developed web applications using modern technologies and frameworks.",
    "date": "2022-01-15 to 2023-06-30",
    "technologiesUsed": ["JavaScript", "React", "Node.js", "MongoDB"],
  }
]

const languages = [
  {
    "language": "English",
    "fluency": "Advanced"
  },
  {
    "language": "Spanish",
    "fluency": "Native"
  },
  {
    "language": "French",
    "fluency": "Intermediate"
  }
]

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
  user: Candidate
}

const ProfileCandidate: React.FC<ProfileCandidateProps> = () => {
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
    <section>
      <header>
        <picture>
          <img src="https://unavatar.io/github/enriqueSFranco" alt="kike" />
        </picture>
        <div>
          <h2>Enrique SFranco</h2>
          <ul>
            <li>experiencia</li>
            <li>ubicacion</li>
            <li>username</li>
            <li>puesto</li>
          </ul>
        </div>
      </header>
      <article>
        <div>
          <h2>conocimientos</h2>
          <ul>
            {stack.length === 0 ? (
              <span>Sin habilidades registradas.</span>
            ) : (
              stack.map((it) => (
                <li key={`skill-${it}`}>
                  <span>{it}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div>
          <h2>experiencia</h2>
          <ul>
            {experience.length === 0 ? (
              <span>Sin habilidades registradas.</span>
            ) : (
              experience?.map((it) => (
                <li key={`experience-${it.id}`}>
                  <article>
                    <header>
                      <picture>
                        <img src="" alt="empresa" />
                      </picture>
                      <div>
                        <h2>puesto</h2>
                        <h3>fecha</h3>
                      </div>
                    </header>
                    <div>
                      <p>descripcion</p>
                    </div>
                    <div>
                      <h2>tecnologias</h2>
                      <ul>
                        {
                          stack.map(it => (
                            <li key={`stack-${it}`}>{it}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </article>
                </li>
              ))
            )}
          </ul>
        </div>
        <div>
          <h2>Idioma/Dialecto</h2>
          <ul>
            {languages.length === 0 ? (
              <span>Sin idiomas registrados.</span>
            ) : (
              languages.map(({ fluency, language }) => (
                <li key={`language-${language}`}>
                  <span
                  >{language}{fluency}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </article>

    </section>
  )
}

{/* <a
          href={`https://wa.me/${t100_phonenumber}?text=¡Estoy interesado!`}
          rel="noopener"
          target="_blanck"
        >
        </a> */}

export default ProfileCandidate
