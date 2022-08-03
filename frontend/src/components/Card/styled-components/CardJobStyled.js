import styled from "styled-components";

const CardBody = styled.article`
  position: relative;
  width: 400px;
  height: 350px;
  background-color: #faf9fd;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in;
  color: #222;
  font-family: sans-serif;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PublicationDate = styled.span``;

const CardContent = styled.div``;

const TitleJob = styled.span`
  font-weight: 700;
`;

const Tags = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`;

const TagsItem = styled.li`
  background-color: red;
  border-radius: 4px;

  ${props => {
    const colorIndex = props.index % 3 + 1
    return `
      background: var(--bg-color_${colorIndex});
      color: var(--color_${colorIndex})
    `
  }}
`;

const Description = styled.p`
  width: 100%;
  height: 70px;
  color: #7c7c7c;
  margin: 0.8rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  line-clamp: 3;
`;

const Actions = styled.div`
  /* outline: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #018dd4;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5rem;
  width: 120px;
  border-radius: 2px;
  cursor: pointer;
`;

const Location = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
`;

export {
  Actions,
  Button,
  CardBody,
  CardHeader,
  CardContent,
  Description,
  Location,
  PublicationDate,
  Tags,
  TagsItem,
  TitleJob,
};
