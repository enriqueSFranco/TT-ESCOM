import { useEffect, useRef, useState } from "react";
import { getRecommendations } from 'services'

export const useRecommendationsVacancies = (candidateId) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMountend = useRef(true);

  useEffect(() => {
    setIsLoading(true)
    getRecommendations(candidateId)
    .then(res => {
      setTimeout(() => {
          if (isMountend.current) {
            setResponse(res)
          }
        }, 2000)
        setIsLoading(false)
      })
      .catch(error => error)
      .finally(() => setIsLoading(false))
    return () => isMountend.current = false
  }, [candidateId]);

  return { response, isLoading }
};
