import React from "react";
import { useAuth } from "context/AuthContext";
import CardDetailsVacantRecruiter from "components/Card/CardDetailsVacantRecruiter";
import { Grid } from "./Styleds";

const MainInfoVacant = ({ defaultId, vacantId }) => {
  const { token } = useAuth()

  const typeOfUser = token.user.user_type

  return (
    <Grid typeOfUser={typeOfUser}>
      <CardDetailsVacantRecruiter vacantId={vacantId || defaultId} />
    </Grid>
  );
};

export default MainInfoVacant;
