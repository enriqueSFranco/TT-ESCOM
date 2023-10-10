import { useEffect, useState } from 'react'
import { getAllSocialNetworks } from 'services'

export const useGetPlataforms = () => {
  const [plataforms, setPlataforms] = useState(null)
  const controller = new AbortController()

  useEffect(() => {
    getAllSocialNetworks()
      .then(response => setPlataforms(response))
      .catch(error => error)
    return () => controller.abort()
  }, [])

  return {plataforms}
}