import { useEffect, useState } from "react"
import { getStudent, getApplicationsCandidate } from "../services"
import { CandidateId } from "../shared/types.d"

const INITIAL_PAGE = 1

export function useCandidate (candidateId: CandidateId) {
  const [candidate, setCandidate] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getStudent(candidateId)
      .then((res) => setCandidate(res))
      .catch((error) => error)
      .finally(() => setLoading(false))
  }, [candidateId])

  return { candidate, loading }
}

export function useApplications (candidateId: CandidateId) {
  const [applications, setApplications] = useState(null)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [maxPage, setMaxPage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getApplicationsCandidate(candidateId)
      .then((response) => {
        const { page_size, count } = response
        let totalPage = Math.ceil(count / page_size)
        setMaxPage(totalPage)
        setApplications(response.result)
      })
      .catch()
      .finally(() => setLoading(false))
  }, [candidateId])

  return { applications, loading, page, maxPage, setPage }
}
