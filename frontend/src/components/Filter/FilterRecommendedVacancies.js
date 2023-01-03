import { MdRecommend } from "react-icons/md";
import {
  List,
  Item,
  Label,
  Checkbox,
  Content,
  WrapperFilters,
} from "./styled-components/TypeFilterStyled";

const RecommendedVacanciesFilter = ({
  seeRecommendedVacancies,
  handleChangeRecommended,
}) => {
  return (
    <WrapperFilters>
      <Content>
        <h2
          style={{
            fontSize: "22px",
            margin: "0",
            padding: "0",
            fontFamily: "sans-serif",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <MdRecommend style={{ fontSize: "25px", color: "#fff" }} /> Vacantes
          Recomendadas
        </h2>
        <List>
          <Item>
            <Label htmlFor="recommended" style={{ color: "#fff" }}>
              <Checkbox
                type="checkbox"
                id="recommended"
                name="recommended"
                value={seeRecommendedVacancies}
                onChange={handleChangeRecommended}
              />
              Mirar Recomendaciones
            </Label>
          </Item>
        </List>
      </Content>
    </WrapperFilters>
  );
};

export default RecommendedVacanciesFilter;
