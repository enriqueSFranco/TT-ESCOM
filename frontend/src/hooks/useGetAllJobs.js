import { useEffect, useState } from "react";
import { getAllJobs } from "services/jobs/index";

const INITIAL_PAGE = 1;

export function useGetAllJobs() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadinNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setLoading(true);
    getAllJobs()
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    return () => {};
  }, []);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadinNextPage(true);
    getAllJobs(page).then((nextResponse) => {
      setResponse(prevResponse => prevResponse.concat(nextResponse))
      setLoadinNextPage(false)
    });
  }, [page]);

  return { response, loading, loadingNextPage, setPage };
}
