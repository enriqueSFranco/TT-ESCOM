import styled from 'styled-components'

const Card = styled.article`
  height: 250px;
  border-radius: 5px;
  background-color: #FFF;
  padding: 0 1rem 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
`

const CardHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 .5rem; */
`

const CardHeaderLeft = styled.div``

const CardHeaderRight = styled.div`
  width: 50px;
`

const CardListTags = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
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

const CardFooter = styled.footer``

export { Card, CardHeader, CardListTags, CardHeaderLeft, CardHeaderRight, CardListItemTags, TotalApplications, TitleJob, CardFooter }