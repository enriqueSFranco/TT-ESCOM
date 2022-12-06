import React from "react";
import CardDetailsVacantRecruiter from "components/Card/CardDetailsVacantRecruiter";
import { Grid } from "./Styleds";

const MainInfoVacant = ({ defaultId, vacantId }) => {
  return (
    <Grid>
      <CardDetailsVacantRecruiter vacantId={vacantId || defaultId} />
    </Grid>
  );
};

export default MainInfoVacant;
