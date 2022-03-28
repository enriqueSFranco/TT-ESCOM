import { useCallback, useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setData(null);
    setLoading(true);
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    loading,
  };
};
