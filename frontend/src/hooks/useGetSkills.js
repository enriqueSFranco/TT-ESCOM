import { useEffect, useState } from "react";
import { getSkill } from "services";

export function useGetSkills(id) {
  const [skills, setSkills] = useState(null);
  let controller = new AbortController()

  useEffect(() => {
    getSkill(id)
      .then(res => setSkills(res))
      .catch(error => error)

    return () => controller.abort()
  }, [])

  return { skills }
}