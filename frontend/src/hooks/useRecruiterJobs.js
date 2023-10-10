import { useEffect, useRef, useState } from "react"
import { getJobsForRecruiter } from 'services/recruiter/index'

export function useRecruiterJobs({idRcruiter}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    setLoading(true)
    getJobsForRecruiter(`${idRcruiter}`)
      .then(response => {
        setTimeout(() => {

          if (isMountedRef.current) {
            const { data } = response
            setData(data)
          }
        }, 2000)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))

    return () => isMountedRef.current = false
  }, [idRcruiter])

  return { data, error, loading }

}