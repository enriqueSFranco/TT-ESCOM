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
    font-size: .9rem;
    justify-content: space-around;
    padding: .5rem;
    box-shadow: ${props => `${props.borderColor} 0px 1px 2px, ${props.borderColor} 0px 0px 0px 2px ` || `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`};
  }

  @media screen and ${device.laptop} {
    position: relative;
    width: 400px;
    height: 350px;
    background-color: #fff;
    border-radius: 8px;
    color: #222;
    font-family: sans-serif;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: ${props => `${props.borderColor} 0px 1px 2px, ${props.borderColor} 0px 0px 0px 2px ` || `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`};
  }
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PublicationDate = styled.span`
  font-size: .8rem;
  font-weight: 600;
  color: #7c7c7c;
`;

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
    color: #7c7c7c;
    margin: 0.8rem 0;
  }

`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  @media screen and ${device.mobileM} {
    background-color: ${props => props.bgColor || '#018dd4'};
    color: #fff;
    font-weight: 700;
    font-size: .7rem;
    border: none;
    outline: none;
    padding: .5rem;
    width: 80px;
    border-radius: 2rem;
    cursor: pointer;
  }

  @media screen and ${device.laptop} {
    background-color: ${props => props.bgColor || '#018dd4'};
    color: #fff;
    font-weight: 700;
    font-size: .9rem;
    border: none;
    outline: none;
    padding: 0.5rem;
    width: 120px;
    border-radius: 2rem;
    cursor: pointer;
  }

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
