import { useEffect, useState } from "react";
import { getStudent, getApplicationsCandidate } from "services";

const INITIAL_PAGE = 1;

export function useGetCandidate(id) {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStudent(id)
      .then((res) => setCandidate(res))
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, [id]);

  return { candidate, loading };
}

export function useGetApplicationsCandidate(candidateId) {
  const [applications, setApplications] = useState(null);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [maxPage, setMaxPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getApplicationsCandidate(INITIAL_PAGE, candidateId)
      .then((response) => {
        const { page_size, count } = response;
        let totalPage = Math.ceil(count / page_size);
        setMaxPage(totalPage);
        setApplications(response.result);
      })
      .catch()
      .finally(() => setLoading(false));
  }, [candidateId]);

  return { applications, loading, page, maxPage, setPage };
}
