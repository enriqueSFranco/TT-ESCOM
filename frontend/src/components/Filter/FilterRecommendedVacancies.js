import {
  List,
  Item,
  Label,
  Checkbox,
  Content,
  WrapperFilters
} from "./styled-components/TypeFilterStyled";

const RecommendedVacanciesFilter = ({
  seeRecommendedVacancies,
  handleChangeRecommended,
}) => {
  return (
    <WrapperFilters>
      <Content>
        <List>
          <Item>
            <Label htmlFor="recommended">
              <Checkbox
                type="checkbox"
                id="recommended"
                name="recommended"
                value={seeRecommendedVacancies}
                onChange={handleChangeRecommended}
              />
              Ver recomendaciones
            </Label>
          </Item>
        </List>
      </Content>
    </WrapperFilters>
  );
};

export default RecommendedVacanciesFilter;
