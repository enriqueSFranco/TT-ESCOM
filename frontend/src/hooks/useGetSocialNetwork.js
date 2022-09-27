import { useEffect, useState } from "react";
import { getSocialNetwork } from "services";

export function useGetSocialNetwork({idUser}) {
  const [socialNetworks, setSocialNetworks] = useState(null)

  useEffect(() => {
    getSocialNetwork(idUser)
      .then(res => setSocialNetworks(res))
      .catch(error => error)
  }, [])
  return { socialNetworks }
}