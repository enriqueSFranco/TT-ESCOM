import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardBody = styled(Link)`
  outline: 1px solid #ccc;
  width: 500px;
  height: 180px;
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 1.5rem;
  text-align: left;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
`

const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridRight = styled.div`
  outline: 2px solid blue;
  
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