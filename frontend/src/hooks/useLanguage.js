import { useEffect, useState } from "react"
import { getAllLanguage } from 'services'

export function useLanguage() {
  const [languages, setLanguages] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    getAllLanguage()
      .then(response => {
        setLanguages(response)
      })
      .catch(error => setError(error))

    return () => controller.abort()
  })
  return { languages, error }
}