import styled from 'styled-components'

const Card = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 300px;
  border-radius: .5rem;
  background-color: #fff;
  padding: .5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const CardActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
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
  margin: 1rem auto 0 auto;
`

export { Card, CardActions, CardImage, CardFooter, CardImageName }