import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { type Job } from "../shared/interfaces.d"
import { findJobByTitle } from "../services"

type UseFetchJobByTitleResult = {
  job: Job | null
  loading: boolean
}

// TODO: PASAR A UN SERVICIO


export function useFetchJobByTitle (): UseFetchJobByTitleResult {
  const { title } = useParams<{ title: string }>()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, updateLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        updateLoading(true)
        const job: Job | null = title ? await findJobByTitle(decodeURIComponent(title)) : null
        if (isMounted && job != null) {
          setJob(job)
        }
      } catch (error) {
        if (isMounted) {
          if (error instanceof Error) {
            throw (`Error fetching job: ${error.message}`)
          } else {
            throw new Error(`Unknown error occurred`)
          }
        }
      } finally {
        updateLoading(false)
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [title])

  return { job, loading }
}