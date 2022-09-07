import { useEffect, useState } from "react"
import { getJobsForRecruiter } from 'services/recruiter/index'

export function useRecruiterJobs({idRcruiter}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getJobsForRecruiter(`${idRcruiter}`)
      .then(response => {
        const { data } = response
        setData(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }

}