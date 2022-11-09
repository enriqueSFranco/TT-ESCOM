import { useState, useEffect } from "react";
import API from 'services/http.service'

const getObservation = (vacantId) => {
  const { REACT_APP_URL_COMPANY_SEND_COMMENT } = process.env
  return API.get(`${REACT_APP_URL_COMPANY_SEND_COMMENT}${vacantId}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error)
}

export const useGetObservationVacant = ({vacantId}) => {
  const [observation, setObservation] = useState(null);


  useEffect(() => {
    const controller = new AbortController()

    getObservation(vacantId)
      .then(response => setObservation(response))
      .catch(error => error)

    return () => controller.abort()
  }, []);

  return observation
}