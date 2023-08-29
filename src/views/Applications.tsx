import { useEffect, useState } from "react"
import { api } from "../api/fake-api"
import { Application } from "shared"
import { CardJobOffer } from "../components/CardJobOffer"
// import { useApplications } from "../hooks/useCandidate"
// import ApplicationJobStudent from "../components/ApplicationJobStudent"

// import { useAuth } from "context/AuthContext"
// import LayoutHome from "Layout/LayoutHome"
// import Pagination from "components/Pagination/Pagination"
const Applications: React.FC = () => {
  const [jobOffer, setJobOffer] = useState<Application | null>(null)
  // const { token } = useAuth()
  // const { applications } = useApplications(token?.user?.id)
  // const { data } = useFetch(
  //   `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  // )

  // TODO: PASAR A UN CUSTOM HOOK
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.applicationsList()
      setJobOffer(response)
    }
    fetchData()
  }, [])

  if (!jobOffer) return <div>Cargando postulaciones</div>

  return (
    <section className="w-full h-full p-4">
      <header className="grid place-items-center">
        <h2 className="capitalize font-bold">mis postulaciones</h2>
      </header>
      <div className="w-full h-full">
        {jobOffer ? (
          <ul className="w-full h-full flex flex-col gap-4">
            {jobOffer.applications.map(jobOffer => (
              <li key={`jobOfferId-${jobOffer.title}`}>
                <CardJobOffer jobOffer={jobOffer} />
              </li>
            ))}
          </ul>
        ) : <h2>no tienes postulaciones</h2>}
      </div>
    </section>

  )
}

export default Applications