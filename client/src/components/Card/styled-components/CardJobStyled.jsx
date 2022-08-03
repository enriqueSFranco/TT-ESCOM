import styled from 'styled-components'
import { device } from '../../../breakpoints'

const CardBody = styled.article`
  width: 420px;
  height: 225px;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: #3c40434d 0px 1px 2px 0px,#3c404326 0px 2px 6px 2px;
  cursor: pointer;
  border-radius: 8px;
  padding: .5rem 1rem;
  text-decoration: none;
  font-family: sans-serif;

`

const CardHeader = styled.header`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 100px 1fr 20px;
`

const CardContent = styled.div`
  width: 100%;
  height: 70px;
  color: #7c7c7c;
  margin: 1.5rem 0 .5rem 0;
  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5;
  line-clamp: 5;
`

const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`

const HeaderLeft = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid #eee;
  border-radius: 50%;
`

const HeaderCenter = styled.div`
  height: inherit;
  width: 100%;
`

const HeaderRight = styled.div`
  font-size: 1.3rem;
  color: #ccc;
  height: fit-content;

  &:hover {
    color: #222;
  }
`

const H3 = styled.h3`
  font-size: ${({fontSize}) => fontSize || '1rem'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  text-transform: ${({textTransform}) => textTransform || "lowercase"};
  margin: ${({margin}) => margin || '0 0 0 0'};
  color: ${({color}) => color || '#123357'};
  display: flex;
  align-items: center;
  
`

const Image = styled.img`
  position: relative;
  display: block;
  width: fit-content;
  height: fit-content;
  object-fit: contain;
`
const ItemTag = styled.li`
  list-style: none;
`

const ListTags = styled.ul`
  margin-top: .5rem;
  padding: 0;
  display: flex;
  gap: .8rem;
`

export { CardBody, CardContent, CardFooter, CardHeader, H3, HeaderCenter, HeaderLeft, HeaderRight, Image, ItemTag, ListTags }