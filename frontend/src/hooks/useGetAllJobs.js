import { useEffect, useState } from "react";
import { getAllJobs } from "services/jobs/index";

const INITIAL_PAGE = 1;

export function useGetAllJobs() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadinNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(function(){
    setLoading(true);
    getAllJobs(INITIAL_PAGE)
      .then((response) => {
        // console.log('response',response.result)
        setResponse(response.result);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    return () => {};
  }, []);

  useEffect(function() {
    if (page === INITIAL_PAGE) return;

    setLoadinNextPage(true);
    getAllJobs(page).then((nextResponse) => {
      // console.log({nextResponse})
      const { pagination, page_size } = nextResponse
      let maxPage = Math.ceil(pagination / page_size)
      // console.log({page, maxPage})
      if (page <= maxPage) {
        setResponse(prevResponse => [...prevResponse, ...nextResponse?.result])
        setLoadinNextPage(false)
      }
    })
    .catch(error => console.log(error))
  }, [page]);

  return { response, loading, loadingNextPage, setPage };
}
