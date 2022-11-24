import React from "react";
import { useGetApplicationJob } from "hooks/useGetApplicationJob";
import Chip from "components/Chip/Chip";
import { USERS } from "types/users";
import GroupAvatars from "components/Avatar/GroupAvatars";
import {
  Card,
  CardHeader,
  CardListTags,
  CardListItemTags,
  CardHeaderLeft,
  CardHeaderRight,
  TitleJob,
  CardFooter,
} from "./styled-components/CardJobPreviewRecruiterStyled";


const CardJobPreviewRecruiter = ({ info, typeUser }) => {
  const [data] = useGetApplicationJob({ idVacant: info?.t200_id_vacant });

  const { t200_job, t300_id_company, c207_id_experience, c214_id_modality } =
    info;

  if (!info || !data) return null;

  return (
    <Card to={`${info.t200_id_vacant}`}>
      <CardHeader>
        <CardHeaderLeft>
          <TitleJob>{t200_job}</TitleJob>
        </CardHeaderLeft>
        <CardHeaderRight>
          <img
            src={t300_id_company?.t300_logo}
            alt={t300_id_company?.t300_name.slice(0, 2)}
          />
        </CardHeaderRight>
      </CardHeader>

      <CardListTags>
        <CardListItemTags>
          <Chip
            label={`Exp: ${c207_id_experience?.c207_description}`}
            bg="var(--bg-color_1)"
            color="var(--color_1)"
          />
        </CardListItemTags>
        <CardListItemTags>
          <Chip
            label={`Modalidad: ${
              c214_id_modality?.c214_description
                ? c214_id_modality?.c214_description
                : "Se acuerda en entrevista"
            }`}
            bg="var(--bg-color_3)"
            color="var(--color_3)"
          />
        </CardListItemTags>
      </CardListTags>

      <CardFooter>
        {typeUser === USERS.recruiter && (
          !data.length ? (<span>No hay postulaciones</span>) : <GroupAvatars users={data} />
        )}
        <span>
          Estado: {info?.c204_id_vacant_status?.c204_description}
        </span>
      </CardFooter>
    </Card>
  );
};

export default CardJobPreviewRecruiter;
