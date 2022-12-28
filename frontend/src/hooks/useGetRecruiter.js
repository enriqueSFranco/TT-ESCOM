import { useEffect, useRef, useState } from "react";
import { getRecruiter } from "services";

export function useGetRecruiter(id) {
  const [recruiter, setRecruiter] = useState(null);
  const isMountend = useRef(null)

  useEffect(() => {
    getRecruiter(id)
      .then(res => setRecruiter(res))
      .catch(error => error)
  }, [id])

  return { recruiter }
}