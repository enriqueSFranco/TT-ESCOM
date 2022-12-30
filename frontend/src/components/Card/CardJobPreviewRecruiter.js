import { useGetApplicationJob } from "hooks";
import Chip from "components/Chip/Chip";
import { USERS } from "types/users";
import { generateCSSClass, parseThousands } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
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

const CardJobPreviewRecruiter = ({ el, typeUser, onClick }) => {
  const [data] = useGetApplicationJob({ idVacant: el?.t200_id_vacant });
  const {
    t200_job,
    t200_max_salary,
    t200_min_salary,
    t300_id_company,
    c207_id_experience,
    c214_id_modality,
  } = el;

  if (!el || !data) return null;

  console.log(el)

  return (
    <Card onClick={onClick}>
      <CardHeader>
        <CardHeaderRight>
          <img
            src={t300_id_company?.t300_logo}
            alt={t300_id_company?.t300_name}
          />
        </CardHeaderRight>
        <CardHeaderLeft>
          <TitleJob>{t200_job}</TitleJob>
        </CardHeaderLeft>
      </CardHeader>

      <CardListTags>
        <CardListItemTags>
          <Chip
            label={c207_id_experience?.c207_description}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        </CardListItemTags>
        <CardListItemTags>
          <Chip
            label={
              c214_id_modality?.c214_description
                ? c214_id_modality?.c214_description
                : "Se acuerda en entrevista"
            }
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        </CardListItemTags>
        <CardListItemTags>
          <Chip
            label={`$${parseThousands(t200_min_salary)}-${parseThousands(
              t200_max_salary
            )}`}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        </CardListItemTags>
      </CardListTags>

      <CardFooter>
        {typeUser === USERS.recruiter &&
          (!data.length ? (
            <span>No hay postulaciones</span>
          ) : (
            <GroupAvatars users={data} />
          ))}
        {
          typeUser === USERS.manager && (
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <CustomAvatar username={el?.t301_id_recruiter?.t301_name} />
              <span style={{color: '#6D6D6D'}}>{el?.t301_id_recruiter?.t301_name}</span>
            </div>
          )
        }
        <span className={generateCSSClass(el?.c204_id_vacant_status?.c204_description)}>Estado: {el?.c204_id_vacant_status?.c204_description}</span>
      </CardFooter>
    </Card>
  );
};

export default CardJobPreviewRecruiter;
