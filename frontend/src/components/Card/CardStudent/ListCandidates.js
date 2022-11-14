import React from 'react'
import { useFetch } from 'hooks'
import CardCandidate from './CardCandidate'

const ListCandidates = () => {
  const {data } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE}`)

  if (!data) return null;

  return (
    <>
      {data && data?.map(el => (
        <CardCandidate 
          key={crypto.randomUUID()}
          user={el}
        />
      ))}
    </>
  )
}

export default ListCandidates