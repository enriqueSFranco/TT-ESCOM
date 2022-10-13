import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  justify-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

const Wrapper = styled.section`
  position: relative;
  top: 4rem;
  width: 100%;
  text-align: center;
  background-color: #F5F5F5;
  padding-bottom: .5rem;
`

const WrapperTitle = styled.div`
  width: 100%;
  height: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: sticky;
  top: 4rem;
  background-color: #F5F5F5;
`

export { Container, Wrapper, WrapperTitle }