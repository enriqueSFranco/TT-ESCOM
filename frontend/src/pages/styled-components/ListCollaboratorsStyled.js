import styled from 'styled-components'

const HeaderTop = styled.div`
  position: relative;
  top: 3rem;
  padding: 1rem;
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .title {
    position: relative;
    right: 40%;
    top: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const WrapperList = styled.section`
  position: relative;
  top: 4rem;
  background-color: #FFF;
  height: calc(100vh - 9rem);
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
`

export { WrapperList, HeaderTop }