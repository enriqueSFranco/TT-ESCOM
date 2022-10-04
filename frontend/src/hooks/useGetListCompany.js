import { useEffect, useState } from "react";
import { getAllBusiness } from 'services'

export function useGetListCompany() {
  const [business, setBusiness] = useState(null)

  const controller = new AbortController()
  
  useEffect(() => {
    getAllBusiness()
      .then(response => setBusiness(response))
      .catch(error => error)

    return () => controller.abort()
  }, [])

  return [business]
}