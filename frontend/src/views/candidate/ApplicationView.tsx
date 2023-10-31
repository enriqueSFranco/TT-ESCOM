// import { api } from "../api/fake-api"
// import { Application } from "shared"
import { ItemList } from "../../components/ItemList"
import { CardJobOffer } from "../../components/card-offer"
import { useAppSelector } from "../../hooks/store"
import { Direction } from "../../shared"
// import { useApplications } from "../hooks/useCandidate"
// import ApplicationJobStudent from "../components/ApplicationJobStudent"

// import { useAuth } from "context/AuthContext"
// import LayoutHome from "Layout/LayoutHome"
// import Pagination from "components/Pagination/Pagination"
const Applications: React.FC = () => {
  const myJobs = useAppSelector(state => state.candidate.myJobs)
  // const [jobOffer, setJobOffer] = useState<Application | null>(null)
  // const { token } = useAuth()
  // const { applications } = useApplications(token?.user?.id)
  // const { data } = useFetch(
  //   `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  // )

  // TODO: PASAR A UN CUSTOM HOOK
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await api.applicationsList()
  //     setJobOffer(response)
  //   }
  //   fetchData()
  // }, [])

  return (
    <section className="w-full h-full p-4">
      <header className="grid place-items-center">
        <h2 className="capitalize font-bold">mis postulaciones</h2>
      </header>
      <article className="w-full h-full">
        <ItemList
          data={myJobs}
          direction={Direction.COLUMN}
          emptyMessage="No tienes vacantes guardadas"
          render={(job) => <CardJobOffer jobOffer={job} />}
        />
      </article>
    </section>
  )
}

export default Applications