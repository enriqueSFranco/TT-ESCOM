import styled from 'styled-components'
import background from 'assets/images/PolygonLuminary.png'

const Button = styled.button`
  border: none;
  outline: none;
  padding: .5rem 1rem;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Header = styled.header`
  padding: 1rem 0;
  color: '#fff';
  background: center/cover no-repeat url(${background});
`

const TextH2 = styled.h2`
  font-size: ${props => props.size || '1.3em'};
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: linear-gradient(30deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const WrapperRequitements = styled.div`
  padding: 1rem;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

const DescriptionJob = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 1rem;
  height: 400px;
  overflow-y: auto;
`

export { Button, DescriptionJob, Header, TextH2, WrapperRequitements }