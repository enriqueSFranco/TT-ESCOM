import styled from 'styled-components'

const Card = styled.article`
  position: relative;
  height: 190px;
  outline: 2px solid red;
  border-radius: 5px;
  background-color: #FFF;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const CardHeader = styled.header`
  height: 60px;
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
  /* outline: 2px solid blue; */
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 90px;
    object-fit: contain;
    object-position: center center;
  }
`

const CardListTags = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
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
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 1rem .5rem 1rem;
  width: 100%;

  .abierta {color: #38761D; font-weight: 700;}

  .en-revision {color: #085394; font-weight: 700;}

  .cerrada {color: #990000; font-weight: 700;}
`

export { Card, CardHeader, CardListTags, CardHeaderLeft, CardHeaderRight, CardListItemTags, TotalApplications, TitleJob, CardFooter }