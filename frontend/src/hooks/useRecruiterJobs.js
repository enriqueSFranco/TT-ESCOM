import { useEffect, useState } from "react"
import { getJobsForRecruiter } from 'services/recruiter/index'

export function useRecruiterJobs({idRcruiter}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    getJobsForRecruiter(`${idRcruiter}`)
      .then(response => {
        const { data } = response
        setData(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return { data, error, loading }

}