import { useEffect, useState } from 'react'
import { getApplicationsJobs } from 'services/jobs/index'

export function useGetApplicationJob({ idVacant }) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const controller = new AbortController()
    getApplicationsJobs(idVacant)
      .then(response => {
        setData(response)
      })
      .catch(error =>  console.log(error))
    return () => controller.abort()
  }, [idVacant]);

  return [data]
}