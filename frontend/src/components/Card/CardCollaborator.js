import React from "react";
import Button from "components/Button/Button";
import Chip from "components/Chip/Chip";
import CustomAvatar from "components/Avatar/Avatar";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {
  Card,
  CardActions,
  CardImage,
  CardFooter,
  CardImageName,
} from "./styled-components/CardCollaboratorStyled";
import Tooltip from "components/Tooltip/TooltipText";

const CardCollaborator = ({
  collaboratorName,
  position,
  picture,
  openModalEdit,
  openModalDelete,
}) => {
  return (
    <Card>
      <CardActions>
          <>
            <Tooltip title={`Editar informacion`}>
              <Button
                onClick={openModalEdit}
                bgColor="transparent"
                icon={<FiEdit style={{ color: "#125dfc", fontSize: "18px" }} />}
              />
            </Tooltip>
            <Tooltip title={`Eliminar usuario`}>
              <Button
                onClick={openModalDelete}
                bgColor="transparent"
                color="red"
                icon={<MdDelete style={{ fontSize: "18px" }} />}
              />
            </Tooltip>
          </>

      </CardActions>
      <CardImage>
        <CustomAvatar
          width="100px"
          height="100px"
          picture={picture}
          username={collaboratorName}
        />
        <CardImageName>
          <span>{collaboratorName}</span>
        </CardImageName>
      </CardImage>
      <CardFooter>
        <Chip
          label={`Cargo en ESCOM: ${position}`}
          outline={`1px solid #ccc`}
          bg="#000"
          color="#ffff"
        />
      </CardFooter>
    </Card>
  );
};

export default CardCollaborator;
