import { useEffect, useRef, useState } from "react";
import { getAllJobs } from "services/jobs/index";

// const INITIAL_PAGE = 1;

export function useGetAllJobs() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true)
  // const [loadingNextPage, setLoadinNextPage] = useState(false);
  // const [page, setPage] = useState(INITIAL_PAGE);
  // const [maxPage, setMaxPage] = useState(0)

    useEffect(function(){
    setLoading(true);
    getAllJobs()
      .then((response) => {
        setTimeout(() => {
          if (isMounted.current)
            setResponse(response);
        }, 2000)
      })
      .catch((error) => error)
      .finally(() => setLoading(false));

    return () => isMounted.current = false;
  }, []);

  // useEffect(function(){
  //   setLoading(true);
  //   getAllJobs(INITIAL_PAGE)
  //     .then((response) => {
  //       const { page_size, count } = response
  //       let totalPage = Math.ceil(count / page_size)
  //       setMaxPage(totalPage)
  //       setResponse(response.result);
  //     })
  //     .catch((error) => error)
  //     .finally(() => setLoading(false));

  //   return () => {};
  // }, []);

  // useEffect(function() {
  //   if (page === INITIAL_PAGE) return;

  //   if (page <= maxPage) {
  //     setLoadinNextPage(true);
  //     getAllJobs(page).then((nextResponse) => {
  //       console.log(nextResponse)
  //       setResponse(prevResponse => [...prevResponse, ...nextResponse?.result])
  //       setLoadinNextPage(false)
  //     })
  //     .catch(error => console.log(error))
  //   } else return;
  // }, [maxPage, page]);

  return { response, loading };
}