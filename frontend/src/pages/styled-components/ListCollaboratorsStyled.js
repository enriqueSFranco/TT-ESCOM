import styled from 'styled-components'

const HeaderTop = styled.div`
  position: relative;
  top: 3rem;
  padding: 1rem;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const WrapperList = styled.section`
  position: relative;
  top: 4rem;
  background-color: #fff;
  height: calc(100vh - 11rem);
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export { WrapperList, HeaderTop }