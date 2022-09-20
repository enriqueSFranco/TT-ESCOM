import { useEffect, useState } from "react";
import { getSkill } from "services";

export function useGetSkills(id) {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    getSkill(id)
      .then(res => setSkills(res))
      .catch(error => error)
  }, [id])

  return { skills }
}