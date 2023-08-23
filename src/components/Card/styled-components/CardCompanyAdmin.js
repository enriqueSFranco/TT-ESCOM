import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardBody = styled(Link)`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 500px;
  height: 180px;
  display: grid;
  background-color: #fff;
  grid-template-columns: 1fr 150px;
  gap: 1.5rem;
  text-align: left;
  padding: 0 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;

  &:hover {
    color: #000;
  }
`

const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* justify-content: space-between; */
`

const GridRight = styled.div`
  /* outline: 2px solid blue; */
  display: grid;
  place-content: center;

  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }
`


const ContainerTotal = styled.div`
  width: fit-content;
`

const SubContainerTotal = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  gap: .1rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`


export { CardBody, Container, ContainerTotal, GridLeft, GridRight, SubContainerTotal }