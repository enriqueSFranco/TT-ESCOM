import { useEffect, useState } from "react";
import { getAllBusinessAdmin, getBusiness } from 'services'

export function useGetListCompany() {
  const [business, setBusiness] = useState(null)

  const controller = new AbortController()
  
  useEffect(() => {
    getAllBusinessAdmin()
      .then(response => setBusiness(response))
      .catch(error => error)

    return () => controller.abort()
  }, [])

  return [business]
}

export function useGetCompany({ idCompany }) {
  const [company, setCompany] = useState(null)
  
  useEffect(() => {
    const controller = new AbortController()
    getBusiness(idCompany)
      .then(response => setCompany(response))
      .catch(error => error)

    return () => controller.abort()
  }, [idCompany])

  return [company]
}