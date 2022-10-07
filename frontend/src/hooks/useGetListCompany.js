import { useEffect, useState } from "react";
import { getAllBusiness, getBusiness } from 'services'

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

export function useGetCompany({ idCompany }) {
  const [company, setCompany] = useState(null)

  const controller = new AbortController()
  
  useEffect(() => {
    getBusiness(idCompany)
      .then(response => setCompany(response))
      .catch(error => error)

    return () => controller.abort()
  }, [])

  return [company]
}