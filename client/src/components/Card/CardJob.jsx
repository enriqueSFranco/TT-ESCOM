import React from 'react'
import Tag from "../Tag/Tag";
import openModal from '../../utils/openModal';
import { numberFormat } from "../../utils/numberFormat";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdBusiness } from "react-icons/io";
import {
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  H3,
  HeaderCenter,
  HeaderLeft,
  Image,
  ItemTag,
  ListTags,
} from "./styled-components/CardJobStyled";

const CardJob = ({data}) => {

  const handleClick = () => openModal(data);

  return (
    <CardBody onClick={handleClick}>
      <CardHeader>
        <HeaderLeft>
          {data?.t300_id_company.t300_logo ? (
            <Image
              src={data?.t300_id_company.t300_logo}
              alt={data.t300_id_company.t300_name}
            />
          ) : (
            <IoMdBusiness style={{color: '#1B8EFB', fontSize: '2.5rem'}} />
          )}
        </HeaderLeft>
        <HeaderCenter>
          <H3 color="#435362" textTransform="uppercase">
            {data.t200_job === undefined ? 'Nombre de la vacante no disponible' : data.t200_job}
          </H3>
          <H3
            fontSize=".8rem"
            fontWeight="500"
            color="#606060"
            margin=".4rem 0 0 0"
            textTransform="capitalize"
          >
            <HiOutlineLocationMarker style={{fontSize: '.9rem', color: '#606060', marginRight: '.3rem'}} />
            {`${data.t200_state === undefined ? 'Ubicacion no especificada' : data.t200_state} ${data.t200_street === undefined ? '' : data.t200_street}`}
          </H3>
        </HeaderCenter>
      </CardHeader>

      <CardContent>{data.t200_description}</CardContent>

      <CardFooter>
        <ListTags>
          <ItemTag>
            <Tag
              bg='#EAF0FE'
              color='#0064C6'
              label={data.t200_modality === undefined ? 'modalidad' : data.t200_modality}
            />
          </ItemTag>
          <ItemTag>
            <Tag
              bg='#EAF0FE'
              color='#0064C6'
              label={data.t200_max_salary === undefined ? '00.00MX' : `${numberFormat(data.t200_max_salary).slice(4)}MXN/mes`}
            />
          </ItemTag>
          <ItemTag>
            <Tag
              bg='#EAF0FE'
              color='#0064C6'
              label={data.c207_id_experience.c207_description === undefined ? 'EXP no especificada' : data.c207_id_experience.c207_description}
            />
          </ItemTag>
        </ListTags>
      </CardFooter>
    </CardBody>
  );
};

export default CardJob;
