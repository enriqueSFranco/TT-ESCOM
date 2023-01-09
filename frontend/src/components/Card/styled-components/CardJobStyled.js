import styled from "styled-components";
import { device } from "breakpoints";

const CardBody = styled.article`
  @media screen and ${device.mobileM} {
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 8px;
    color: #222;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    justify-content: space-around;
    padding: 0.5rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  @media screen and ${device.laptop} {
    width: 100%;
    height: 330px;
    border-radius: 6px;
    color: #222;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    ${(props) => {
      if (props.isActive) {
        return `
          border: 2px solid #2172F2;
        `;
      }
      if (props.time >= 1 && props.time <= 70) {
        return `
        background: hsla(280, 95%, 57%, 1);
          background: linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
          background: -moz-linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
          background: -webkit-linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
          filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#B429F9", endColorstr="#26C5F3", GradientType=1 );
        `;
      }
    }}
`;

const CardBorder = styled.div`
  position: relative;
  left: -5px;
  background-color: #fff;
  width: calc(100% + 10px);
  border-radius: 1rem;
  padding: 0.5rem;

  ${(props) => {
    if (props.isVacantRecommended) {
      return `
        background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
        color: #fff;
      `;
    }
  }}
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  color: #000;
`;

const CardImage = styled.div`
  width: 130px;
  height: 70px;

  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }
`;

const PublicationDate = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #b1b4bc;
  height: fit-content;

  ${(props) => {
    if (props.time >= 1) {
      return `
          background-color: #E7F6DF; 
          color: #62C62E;
          padding: .2rem .3rem;
          border-radius: .2rem;
          font-weight: 600;
        `;
    }
  }}
`;

const CardContent = styled.div`

`;

const TitleJob = styled.span`
  font-weight: 700;
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ${(props) => {
    if (props.time >= 71) {
      return `
        color: #000;
        font-weight: 600;
      `;
    }
    if (props.time >= 1 && props.time <= 70) {
      return `
        background: linear-gradient(27deg, #3f5efb, #fc466b);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      `;
    }
  }}
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

  ${(props) => {
    const colorIndex = (props.index % 3) + 1;
    return `
      background: var(--bg-color_${colorIndex});
      color: var(--color_${colorIndex})
    `;
  }}
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  line-clamp: 3;

  @media screen and ${device.mobileM} {
    width: 100%;
    height: 60px;
  }

  @media screen and ${device.laptop} {
    width: 100%;
    height: 70px;
    color: #000;
    font-size: 15px;
    margin: 0.8rem 0;

    ${(props) => {
      if (props.isVacantRecommended) {
        return `
          color: #fff;
        `;
      }
  }}
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  @media screen and ${device.mobileM} {
    background-color: ${(props) => props.bgColor || "#018dd4"};
    color: #fff;
    font-weight: 700;
    font-size: 0.7rem;
    border: none;
    outline: none;
    padding: 0.5rem;
    width: 80px;
    border-radius: 1rem;
    cursor: pointer;
  }

  @media screen and ${device.laptop} {
    background-color: ${(props) => props.bgColor || "#1C8EFB"};
    color: #fff;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    border: none;
    outline: none;
    padding: 0.5rem;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: background-color 0.5s ease;
    cursor: pointer;

    ${(props) => {
      if (props.isVacantRecommended) {
        return `
          background-color: #fff;
          color: #2172F2;
        `;
      }
  }}
  }
`;

const Location = styled.span`
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.85rem;
`;

export {
  Actions,
  Button,
  CardBody,
  CardImage,
  CardHeader,
  CardContent,
  CardBorder,
  Description,
  Location,
  PublicationDate,
  Tags,
  TagsItem,
  TitleJob,
};
