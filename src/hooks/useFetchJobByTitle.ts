import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { type Job } from "../shared/interfaces.d"

type UseFetchJobByTitleResult = {
  job: Job | null;
  loading: boolean;
}

// TODO: PASAR A UN SERVICIO
async function findJobByTitle (jobTitle: string): Promise<Job | null> {
  try {
    const response = await fetch("/public/api/jobs.json")

    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }

    const data: Job[] = await response.json()
    const jobIdx = data.findIndex(item => item.title.toLowerCase().includes(jobTitle.toLowerCase()))

    if (jobIdx >= 0) {
      const matchedJob: Job = data[jobIdx]
      return matchedJob
    }
    return null
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching or processing data: ${error.message}`)
    } else {
      throw new Error(`Unknown error occurred`)
    }
  }
}

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
        } else {
          setJob(null)
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