import { Checkbox, FormControlLabel } from "@mui/material";

const RecommendedVacanciesFilter = ({ handleChangeRecommended }) => {
  return (
    <FormControlLabel
      label="Mirar Recomendaciones"
      control={<Checkbox onChange={handleChangeRecommended} />}
    />
  );
};

export default RecommendedVacanciesFilter;
