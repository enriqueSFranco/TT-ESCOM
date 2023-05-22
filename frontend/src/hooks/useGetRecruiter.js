import { useEffect, useState } from "react";
import { getRecruiter } from "services";

export function useGetRecruiter(id) {
  const [recruiter, setRecruiter] = useState(null);

  useEffect(() => {
    getRecruiter(id)
      .then(res => setRecruiter(res))
      .catch(error => error)
  }, [id])

  return { recruiter }
}