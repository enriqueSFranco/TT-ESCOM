import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import Loader from 'components/Loader/Loader'
import Chip from 'components/Chip/Chip'
import { WrapperLoader, WraperCard, Description, HeaderInfo } from './styled-components/CardDetailsVacantRecruiterStyled'

const CardDetailsVacantRecruiter = ({info}) => {
  const { t200_id_vacant } = useParams()
  const {data, error, loading } = useFetch(`${process.env.REACT_APP_URL_VACANTS}${t200_id_vacant}/`)

  if (!data) return null

  return (
    <>
      {loading ? <WrapperLoader><Loader /></WrapperLoader> : (
        <WraperCard>
          <h1>{data[0]?.t200_job}</h1>
          <HeaderInfo>
            <ul>
              <li>{data[0]?.c214_id_modality?.c214_description}</li>
              <li>{data[0]?.c207_id_experience?.c207_description}</li>
              <li>{data[0]?.c206_id_profile?.c206_description}</li>
              <li>{data[0]?.c208_id_contract?.c208_description}</li>
              <li>{data[0]?.t200_close_date}</li>
            </ul>
          </HeaderInfo>
          <Description>
            {data[0]?.t200_description}
          </Description>
        </WraperCard>
      )}
    </>
  )
}

export default CardDetailsVacantRecruiter