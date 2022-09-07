import { useEffect, useState } from 'react'
import { getApplicationsJobs } from 'services/jobs/index'

export function useGetApplicationJob({ idVacant }) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    getApplicationsJobs(idVacant)
      .then(response => {
        // console.log(response)
        setData(response)
      })
      .catch(error =>  console.log(error))
  }, []);

  return [data]
}