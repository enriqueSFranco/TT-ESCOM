import { useEffect, useRef, useState } from 'react'
import { getApplicationsJobs } from 'services/jobs/index'

export function useGetApplicationJob({ idVacant }) {
  const [data, setData] = useState(null)
  const isMountedRef = useRef(true)
  
  useEffect(() => {
    getApplicationsJobs(idVacant)
      .then(response => {
        setTimeout(() => {
          if (isMountedRef.current)
            setData(response)
        })
      })
      .catch(error =>  console.log(error))
    return () => isMountedRef.current = false
  }, [idVacant]);

  return [data]
}