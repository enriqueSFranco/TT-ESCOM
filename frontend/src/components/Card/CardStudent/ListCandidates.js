import React from 'react'
import { useFetch } from 'hooks'
import CardCandidate from './CardCandidate'

const ListCandidates = () => {
  const {data, erorr, loading } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE}`)
  // const { data: dataSkills, error: errorSkills, loading: loadingSkills } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE_SKILLS}`)

  if (!data) return null;

  console.log(data)

  return (
    <>
      {data && data?.map(el => (
        <CardCandidate 
          key={crypto.randomUUID()}
          user={el}
          idUser={el.t100_id_student}
        />
      ))}
    </>
  )
}

export default ListCandidates