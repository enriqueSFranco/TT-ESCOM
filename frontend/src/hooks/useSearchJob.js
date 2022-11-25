import { useEffect, useState } from 'react'
import API from 'services/http.service'

const { REACT_APP_URL_VACANT_SEARCH } = process.env

export function useSearchJob(query) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function getData(query) {
    if (query !== "") {
      return API(`${REACT_APP_URL_VACANT_SEARCH}${query }`)
        .then(response => {
          const { data } = response
          return data
        })
        .catch(error => error)
    }
    return
  }

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    if (query !== "") {
      getData(query)
        .then(response => setData(response))
        .catch(error => error)
        .finally(() => setIsLoading(false))
    }

    return () => controller.abort()
  }, [query])

  return [data, isLoading]
}