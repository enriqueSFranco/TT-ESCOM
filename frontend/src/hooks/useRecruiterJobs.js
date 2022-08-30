import { useEffect, useState } from "react"
import { getJobsForRecruiter } from 'services/recruiter/index'

export function useRecruiterJobs({idRcruiter}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getJobsForRecruiter(`${idRcruiter}`)
      .then(response => {
        const { data } = response
        setData(data)
      })
      .catch(error => setError(error))
  }, [])

  return { data, error }

}