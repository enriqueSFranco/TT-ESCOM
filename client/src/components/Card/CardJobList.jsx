import React from 'react'
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import CardJob from './CardJob'

const CardJobList = ({ query = "" }) => {
  const debounce = useDebounce(query, 500);
  const { data, loading } = useFetch(import.meta.env.VITE_API_VACANTS);

  if (!data) return null;

  if (query === "") {
    return (
      <>
        {
          
          data && data?.map(job => (
            <CardJob
              key={job?.t200_id_vacant}
              data={job}
            />
          ))
        }
      </>
    )
  }
}


export default CardJobList