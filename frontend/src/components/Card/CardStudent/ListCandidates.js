import React from 'react'
import { useFetch } from 'hooks'
import CardCandidate from './CardCandidate'

const ListCandidates = () => {
  const {data, erorr, loading } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE}`)

  if (!data) return null;

  console.log(data)

  return (
    <>
      {data && data?.map(el => (
        <CardCandidate 
          key={crypto.randomUUID()}
          job={el}
        />
      ))}
    </>
  )
}

export default ListCandidates