import { fetcher } from "../services"
import type { Job } from "../shared"

// // const {
// //   REACT_APP_URL_VACANTS,
// //   REACT_APP_URL_VACANT_SEARCH,
// //   REACT_APP_URL_VACANT_REQUIREMENTS,
// //   REACT_APP_URL_VACANT_VACANT_INFO,
// //   REACT_APP_URL_VACANT_APPLICATIONS,
// //   REACT_APP_URL_FILTER_VACANTS
// // } = process.env

/**
 * Realiza una solicitud a la API para obtener la lista de trabajos.
 * 
 * @returns {Promise<Job[]>} Una promesa que resuelve en una matriz de trabajos.
 * @throws {Error} - Si hay un error al buscar o procesar los datos.
 */
export const getJobsQuery = async (): Promise<Job[]> => {
  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(() => signal, 1000)

  try {
    const jobsResponse = await fetch('http://localhost:3000/jobs', { signal })

    if (!jobsResponse.ok) {
      throw new Error(`Error fetching data: ${jobsResponse.statusText}`)
    }
    const jobs: Job[] = await jobsResponse.json()
    const mappedJobs: Job[] = jobs.map(job => ({ ...job }))

    return mappedJobs
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Aborted!')
      } else {
        throw new Error(`Error: ${error.message}`)
      }
    }
    return []
  }
}

/**
 * Busca trabajos por título en una API.
 *
 * @param {string} jobTitle - El título del trabajo que se desea buscar.
 * @returns {Promise<Job | null>} - Una promesa que resuelve en un objeto Job si se encuentra el trabajo, o null si no se encuentra.
 * @throws {Error} - Si hay un error al buscar o procesar los datos.
 */
export const findJobByTitle = async (jobTitle: string): Promise<Job | null> => {
  try {
    const response = await fetch('http://localhost:3000/jobs')

    if (!response.ok) {
      throw new Error(`Error al buscar trabajos por título. Código de estado: ${response.status}`);
    }

    const data = await response.json()

    const job = data.find((job: Job) => job.title === jobTitle)

    return job || null
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al buscar o procesar datos: ${error.message}`);
    } else {
      throw new Error(`Error desconocido`);
    }
  }
}

export const savedJob = async ({ job }: { job: Job }) => {
  try {
    const response = await fetcher().PUT(new URL(`http://localhost:3000/jobs/${job.id}`), {
      body: JSON.stringify({ ...job, isFavorite: true })
    })

    if (!response.ok) {
      throw new Error("Error durante la petición")
    }

    const data = await response.json()
    return data
  } catch (error) {

  }
}

export const removeJob = async ({ jobId }: { jobId: number }) => {
  try {
    const response = await fetcher().DEL(new URL(`http://localhost:3000/jobs/${jobId}`), {
      body: JSON.stringify({ isFavorite: false })
    })

    if (!response.ok) {
      throw new Error("Error durante la petición")
    }

    const data = await response.json()
    return data
  } catch (error) {

  }
}

// export const searchCharacter = (nameJob) => {
//   return API(`${REACT_APP_URL_VACANT_SEARCH}${nameJob}`)
//     .then((res) => {
//       const { data } = res
//       return data
//     })
//     .catch((error) => error)
// }

// export const getJobRequirements = (id) => {
//   return API(`${REACT_APP_URL_VACANT_REQUIREMENTS}${id}/`)
//     .then((response) => response)
//     .catch((error) => error)
// }

// export const getApplicationsJobs = (idVacant) => {
//   return API(`${REACT_APP_URL_VACANT_APPLICATIONS}${idVacant}/`)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => error)
// }

// export const postJob = (body) => {
//   return API.post(REACT_APP_URL_VACANTS, body)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => error)
// }

// export const getObjectUpdateVacant = (id) => {
//   return API.patch(`${REACT_APP_URL_VACANTS}${id}/`)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => error)
// }

// export const searchJob = async (payload = {}) => {
//   return API.post(`${REACT_APP_URL_FILTER_VACANTS}`, payload)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => {
//       return error
//     })
// }
