import { useEffect, useState } from "react";
import { validateCompany } from "services";

export function useValidateCompanies() {
  const [listCompanies, setListCompanies] = useState(null)
  const controller = new AbortController()

  useEffect(() => {
    validateCompany()
      .then(response => setListCompanies(response))
      .catch(error => error)

    return controller.abort()
  }, [])

  return [listCompanies]
}