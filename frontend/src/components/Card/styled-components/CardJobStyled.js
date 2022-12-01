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
    /* position: relative; */
    width: 400px;
    height: fit-content;
    border-radius: 0.5rem;
    color: #222;
    font-family: sans-serif;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-around; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    ${(props) => {
      if (props.close > 30) {
        return `
          background: #FF416C;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        `;
      }
      if (props.close >= 1 || props.close <= 3) {
        return `
          background: #FDFC47;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #24FE41, #FDFC47);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #24FE41, #FDFC47); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `;
      }
    }}
  }
`;

const CardBorder = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
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
    if (props.close > 30) {
      return `
          color: red;
          font-weight: 600;
        `;
    }
    if (props.close < 15) {
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

const CardContent = styled.div``;

const TitleJob = styled.span`
  font-weight: 700;
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
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

const Description = styled.p`
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
    margin: 0.8rem 0;
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
