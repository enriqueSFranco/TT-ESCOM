import { type Job } from "../shared"
import { useAppDispatch } from "./store"
import { saveJobToFavs } from "../stores/features/candidate-slice"


export function useCandidateActions () {
  const dispatch = useAppDispatch()

  const saveJob = (job: Job) => dispatch(saveJobToFavs(job))

  return { saveJob }
}

// export function useApplications (candidateId: CandidateId) {
//   const [applications, setApplications] = useState(null)
//   const [page, setPage] = useState(INITIAL_PAGE)
//   const [maxPage, setMaxPage] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setLoading(true)
//     getApplicationsCandidate(candidateId)
//       .then((response) => {
//         const { page_size, count } = response
//         let totalPage = Math.ceil(count / page_size)
//         setMaxPage(totalPage)
//         setApplications(response.result)
//       })
//       .catch()
//       .finally(() => setLoading(false))
//   }, [candidateId])

//   return { applications, loading, page, maxPage, setPage }
// }
