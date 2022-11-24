import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  position: relative;
  height: 200px;
  color: #000;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #FFF;
  padding: 2rem 0 0 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    color: #000;
  }
`

const CardHeader = styled.header`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardHeaderLeft = styled.div`
  /* outline: 2px solid greenyellow; */
  width: 100%;
  font-weight: 700;
  `

const CardHeaderRight = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 100%;
    object-fit: contain;
    object-position: center center;
    margin-right: .5rem;
  }
`

const CardListTags = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0 0 .5rem .5rem;
  list-style: none;
  `

const CardListItemTags = styled.li``

const TitleJob = styled.h2`
  font-size: 1em;
  margin: 0 0 .5rem .5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TotalApplications = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: .9rem;
  color: #ccc;
  font-weight: 700;
  `

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem .5rem 1rem;
  width: 100%;
  height: 60px;
  border-radius: 0 0 1rem 1rem;
  background-color: #085394;
  color: #fff;
`

export { Card, CardHeader, CardListTags, CardHeaderLeft, CardHeaderRight, CardListItemTags, TotalApplications, TitleJob, CardFooter }