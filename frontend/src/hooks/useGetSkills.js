import { useEffect, useRef, useState } from "react";
import { getSkill } from "services";

export function useGetSkills(id) {
  const [skills, setSkills] = useState(null);
  const isMountedRef = useRef(true)

  useEffect(() => {
    getSkill(id)
      .then(res => {
        setTimeout(() => {
          if(isMountedRef.current)
          setSkills(res)

        }, 2000)
      })
      .catch(error => error)

    return () => isMountedRef.current = false
  }, [id])

  return { skills }
}