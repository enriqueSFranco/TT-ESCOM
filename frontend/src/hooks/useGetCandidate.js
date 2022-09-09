import { useEffect, useState } from "react";
import { getStudent } from "services/students";

export function useGetCandidate({ idUser }) {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    getStudent(idUser).then((response) => {
      console.log(response)
      setCandidate(response);
    });
  }, [idUser]);

  return [candidate];
}
