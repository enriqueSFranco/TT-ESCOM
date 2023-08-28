import { useState } from "react"
import { useApplications } from "../hooks/useCandidate"
import ApplicationJobStudent from "../components/ApplicationJobStudent"
// import { useAuth } from "context/AuthContext"
// import LayoutHome from "Layout/LayoutHome"
// import Pagination from "components/Pagination/Pagination"

function replaceBackSpace (string) {
  return string.replace(" ", "-").toLowerCase()
}

const NoApplications = () => {
  return <div>No tienes ninguana postulacion</div>
}

export const Applications: React.FC = () => {
  // const { token } = useAuth()
  const { applications } = useApplications(token?.user?.id)
  // const { data } = useFetch(
  //   `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  // )
  // const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(5)

  if (!applications) return null

  return (
    <section className="w-full h-full">
      <header className="grid place-items-center">
        <h2 className="capitalize font-bold">mis postulaciones</h2>
      </header>
      <div className="w-full h-full">
        <ul aria-label="list applications" className="w-full h-full flex flex-col">

        </ul>
      </div>
      {/* {page}
      <Pagination total={applications.length} page={page} setPage={setPage} limit={limit} setLimit={setLimit} /> */}
    </section>

  )
}
