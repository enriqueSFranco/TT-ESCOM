// import API from "services/http-service"

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
 * @returns {Promise<Job[]>} Una promesa que resuelve en una matriz de trabajos.
 */
export const getJobsQuery = async (): Promise<Job[]> => {
  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(() => signal, 1000);

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

// export const getJob = (id) => {
//   return API(`${REACT_APP_URL_VACANTS}${id}/`)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => console.log(error))
// }

// export const getVacantInfo = (id) => {
//   return API(`${REACT_APP_URL_VACANT_VACANT_INFO}${id}/`)
//     .then((response) => {
//       const { data } = response
//       return data
//     })
//     .catch((error) => console.log(error))
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

// export const updateVacant = (id, payload = {}) => {
//   return API.put(`${REACT_APP_URL_VACANTS}${id}/`, payload)
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
