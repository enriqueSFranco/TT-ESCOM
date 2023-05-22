import styled from 'styled-components'

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 300px;
  height: 220px;
  border-radius: 5px;
  background-color: #e5edf1;
  padding: .5rem .5rem .7rem .5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const CardActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`

const CardImage = styled.figure`
  display: grid;
  place-content: center;
  justify-items: center;
  padding: .3rem;
  margin: 0;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }
`

const CardImageName = styled.figcaption`
  margin-top: 1rem;
  font-size: .9rem;
  letter-spacing: 1px;
`

const CardFooter = styled.div`
  text-align: center;
  width: fit-content;
  margin: .3rem auto 0 auto;
`

export { Card, CardActions, CardImage, CardFooter, CardImageName }