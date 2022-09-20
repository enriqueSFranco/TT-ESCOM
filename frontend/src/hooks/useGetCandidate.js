import { useEffect, useState } from "react";
import { getStudent } from "services";

export function useGetCandidate(id) {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    getStudent(id)
      .then(res => setCandidate(res))
      .catch(error => error)
  }, [id])

  return { candidate }
}