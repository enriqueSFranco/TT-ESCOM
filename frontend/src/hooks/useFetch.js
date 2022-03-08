import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchData = async () => {
      setLoading(true);
      
      try {
        let res = await fetch(endpoint, {signal});
        if (!res.ok) {
          let error = {
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Opps, ocurrio un error"
          };
          throw error;
        }
        let json = await res.json();
        
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint]);

  return {
    data,
    error,
    loading,
  };
};
