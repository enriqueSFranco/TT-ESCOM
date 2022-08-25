import { useEffect, useState } from "react"
import { CODE_400 } from "services/http.code"
import API from "services/http.service"

export function useGetAllRecruitrs() {
  const [data, setData] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const controller = new AbortController()
          const signal = controller.signal

          const response = await API(process.env.REACT_APP_URL_VALIDATE_RECRUITER, {signal})

          if (response.status === CODE_400) {
            let error = {
              err: true,
              status: response.status || '00',
              statusText: response.statusText || 'Opppss, ha ocurrido un error'
            }
            throw error
          }
          const { data } = response;
          setData(data);

        } catch (error) {
          return error
        }
      };
      fetchData()
    }, []);

  return data
}
