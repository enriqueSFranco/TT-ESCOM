import { useState, useEffect } from "react";
import API from 'services/http.service'

const getObservation = (url, vacantId) => {
  return API.get(`${url}${vacantId}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error)
}

export const useGetObservationVacant = ({vacantId}) => {
  const [observation, setObservation] = useState(null);
  const { REACT_APP_URL_COMPANY_SEND_COMMENT } = process.env

  useEffect(() => {
    const controller = new AbortController()

    getObservation(REACT_APP_URL_COMPANY_SEND_COMMENT, vacantId)
      .then(response => setObservation(response))
      .catch(error => error)

    return () => controller.abort()
  }, [vacantId]);

  return observation
}


export const useGetObservationVacantManager = ({vacantId}) => {
  const [observationManager, setObservationManager] = useState(null);
  const { REACT_APP_URL_MANAGER_SEND_OBSERVATION } = process.env

  useEffect(() => {
    const controller = new AbortController()

    getObservation(REACT_APP_URL_MANAGER_SEND_OBSERVATION, vacantId)
      .then(response => setObservationManager(response))
      .catch(error => error)

    return () => controller.abort()
  }, [vacantId]);

  return observationManager
}