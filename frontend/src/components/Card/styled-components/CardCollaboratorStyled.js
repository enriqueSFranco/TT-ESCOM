import styled from 'styled-components'

const Card = styled.div`
  outline: 2px solid #ccc;
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
  outline: 2px solid blue;
  display: grid;
  place-content: center;
  padding: .3rem;
  
  img {
    outline: 2px solid red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }
`

const CardImageName = styled.figcaption`
  outline: 2px solid purple;
  margin-top: 1rem;
`

const CardFooter = styled.div`
  text-align: center;
`

export { Card, CardActions, CardImage, CardFooter, CardImageName }