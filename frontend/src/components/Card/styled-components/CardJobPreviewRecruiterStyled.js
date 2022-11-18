import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  position: relative;
  height: 200px;
  color: #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFF;
  padding: 1rem 1rem 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    color: #000;
  }
`

const CardHeader = styled.header`
  height: fit-content;
  /* outline: 2px solid red; */
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
  }
`

const CardListTags = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
  list-style: none;
`

const CardListItemTags = styled.li``

const TitleJob = styled.h2`
  font-size: 1rem;
  margin: 0;
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
  border-top: 1px solid #ccc;
  /* position: absolute;
  bottom: 1rem; */

  .abierta {color: #38761D; font-weight: 700;}

  .en-revision {color: #085394; font-weight: 700;}

  .cerrada {color: #990000; font-weight: 700;}
`

export { Card, CardHeader, CardListTags, CardHeaderLeft, CardHeaderRight, CardListItemTags, TotalApplications, TitleJob, CardFooter }