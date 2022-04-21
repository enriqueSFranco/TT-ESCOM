import { useState, useEffect } from "react";
import { getAllJobs } from "services/jobs";

const INITIAL_PAGE = 1;

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getAllJobs(page)
        .then(response => {
          setJobs(response.data.result);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      return () => null;
    },
    [page]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);
      getAllJobs({ page }).then((nextJobs) => {
        console.log(nextJobs);
        setJobs((prevJobs) => prevJobs.concat(nextJobs));
        setLoadingNextPage(false);
      });
    },
    [page]
  );

  return { loading, loadingNextPage, jobs, setPage };
}
