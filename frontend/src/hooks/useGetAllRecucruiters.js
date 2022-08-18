import { useEffect, useState } from "react"
import API from "services/http.service"
import { CODE_200 } from "services/http.code"

export function useGetAllRecruitrs() {
  const [data, setData] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const controller = new AbortController()
          const signal = controller.signal

          const response = await API(process.env.REACT_APP_URL_VALIDATE_RECRUITER, {signal})

          if (response.status !== CODE_200) {
            let error = {
              err: true,
              status: response.status || '00',
              statusText: response.statusText || 'Opppss, ha ocurrido un error'
            }
            throw error
          }
          setData(data);

        } catch (error) {
          return error
        }
      };
      fetchData()
    }, []);

  return data
}
