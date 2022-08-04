import { useEffect, useState } from 'react'
import { getAllJobs } from 'services/jobs/index'

export function useGetAllJobs() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    getAllJobs()
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          setResponse(data)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  return [response, loading]
}