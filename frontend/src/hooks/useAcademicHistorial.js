import { useEffect, useState } from "react";
import { getAcademicHistorial } from "services";

export function useAcademicHistorial(candidateId) {
  const [historial, setHistorial] = useState(null);

  useEffect(() => {
    getAcademicHistorial(candidateId)
      .then((response) => {
        setHistorial(response);
      })
      .catch((error) => error);
  }, [candidateId]);

  return { historial }
}
