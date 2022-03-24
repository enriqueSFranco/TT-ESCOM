import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        let res = await fetch(endpoint, { signal });

        if (!res.ok) {
          let error = new Error("Error en la peticion fetch.");
          error.status = res.status || "00";
          error.statusText = res.statusText || "Oppps, ocurrio un error";
          throw error;
        }

        let json = await res.json();

        if (!signal.aborted) { // si la peticion no fue abortada
          setData(json);
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
    };
    fetchData();
    return () => controller.abort();
  }, [endpoint]);

  return {
    data,
    error,
    loading
  };
};