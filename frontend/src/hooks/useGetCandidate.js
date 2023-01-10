import { useEffect, useState } from "react";
import { getStudent } from "services";

export function useGetCandidate(id) {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getStudent(id)
      .then(res => setCandidate(res))
      .catch(error => error)
      .finally(() => setLoading(false))    

  }, [id])

  return { candidate, loading }
}