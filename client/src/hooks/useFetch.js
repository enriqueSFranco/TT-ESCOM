import { useEffect, useState } from "react";
import API from "../services/http.service";

export function useFetch(endpoint, method = 'GET') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
  
    async function request() {
      setLoading(true);
  
      try {
        let response = await API({
          url: endpoint,
          method,
          signal
        })
        if (!signal.aborted) {
          setData(response.data);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted)
          setLoading(false);
      }
    }
    request();

    return () => controller.abort();
  }, [endpoint]);

  return {
    data,
    error,
    loading
  }
}