import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import Loader from "components/Loader/Loader";
import Chip from "components/Chip/Chip";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FcCalendar } from 'react-icons/fc'
import { FaBrain } from 'react-icons/fa'
import {
  WrapperLoader,
  WraperCard,
  Description,
  HeaderInfo,
  ListItems
} from "./styled-components/CardDetailsVacantRecruiterStyled";

const CardDetailsVacantRecruiter = ({ info }) => {
  const { t200_id_vacant } = useParams();
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_URL_VACANTS}${t200_id_vacant}/`
  );

  if (!data) return null;

  return (
    <>
      {loading ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : (
        <WraperCard>
          <h1>{data[0]?.t200_job}</h1>
          <HeaderInfo>
            <ListItems>
              <li>
                <Chip label={`Modalidad: ${data[0]?.c214_id_modality?.c214_description}`} bg="var(--bg-color_3)" color="var(--color_3)" icon={<HiOutlineLocationMarker style={{fontSize: '1.2rem'}} />} />
              </li>
              <li>
                <Chip label={`Experiencia: ${data[0]?.c207_id_experience?.c207_description}`} bg="var(--bg-color_1)" color="var(--color_1)" icon={<FaBrain style={{fontSize: '1.2rem'}} />} />
              </li>
              <li>
                <Chip label={`Fecha de cierre: ${data[0]?.t200_close_date}`} bg="#F78181" color="#DF0101" icon={<FcCalendar style={{fontSize: '1.2rem'}} />} />
              </li>
            </ListItems>
            <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1rem'}}>
              <span style={{fontWeight: '700'}}>{`Perfil del candidato: ${data[0]?.c206_id_profile?.c206_description}`}</span>
              <span style={{fontWeight: '700'}}>{`Contratacion: ${data[0]?.c208_id_contract?.c208_description}`}</span>
            </div>
          </HeaderInfo>
          <Description>
            {data[0]?.t200_description}
          </Description>
        </WraperCard>
      )}
    </>
  );
};

export default CardDetailsVacantRecruiter;
