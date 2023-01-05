import { Checkbox, FormControlLabel } from "@mui/material";
import {
  List,
  Item,
  // Label,
  // Checkbox,
  Content,
  // WrapperFilters,
} from "./styled-components/TypeFilterStyled";

const RecommendedVacanciesFilter = ({
  // seeRecommendedVacancies,
  handleChangeRecommended,
}) => {
  return (
    <Content>
      <List>
        <Item>
          <FormControlLabel
            label="Mirar Recomendaciones"
            control={<Checkbox onChange={handleChangeRecommended} />}
          />
        </Item>
      </List>
    </Content>
  );
};

export default RecommendedVacanciesFilter;
