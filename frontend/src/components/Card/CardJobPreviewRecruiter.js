import React from "react";
import Chip from "components/Chip/Chip";
import GroupAvatars from "components/Avatar/GroupAvatars";
import {
  Card,
  CardHeader,
  CardListTags,
  CardListItemTags,
  CardHeaderLeft,
  CardHeaderRight,
  TitleJob,
  TotalApplications,
  CardFooter,
} from "./styled-components/CardJobPreviewRecruiterStyled";

const CardJobPreviewRecruiter = ({ info }) => {
  if (!info) return null;

  const { t200_job, t300_id_company, c207_id_experience, c214_id_modality } =
    info;

  console.log(info);
  return (
    <Card>
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
            color='var(--color_1)'
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
            color='var(--color_3)'
          />
        </CardListItemTags>
      </CardListTags>

      <TotalApplications>31 postulaciones</TotalApplications>

      <CardFooter>
        {/* TODO: Hacer componente lista de candidatos */}
        <GroupAvatars users={['E', 'J', 'I', 'K', 't', 'y', 'v', 'w', 'c', 'h', 'p']} />
      </CardFooter>
    </Card>
  );
};

export default CardJobPreviewRecruiter;
