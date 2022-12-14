import React from "react";
<<<<<<< HEAD
=======
import { useAuth } from "context/AuthContext";
>>>>>>> feature/reclutador
import CardDetailsVacantRecruiter from "components/Card/CardDetailsVacantRecruiter";
import { Grid } from "./Styleds";

const MainInfoVacant = ({ defaultId, vacantId }) => {
<<<<<<< HEAD
  return (
    <Grid>
=======
  const { token } = useAuth()

  const typeOfUser = token.user.user_type

  return (
    <Grid typeOfUser={typeOfUser}>
>>>>>>> feature/reclutador
      <CardDetailsVacantRecruiter vacantId={vacantId || defaultId} />
    </Grid>
  );
};

<<<<<<< HEAD
export default MainInfoVacant;
=======
export default MainInfoVacant;
>>>>>>> feature/reclutador
