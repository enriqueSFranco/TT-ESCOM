import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 3rem;
  width: 100%;
  background-color: #fff;
`

const WrapperSearch = styled.div`
  /* background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 60px;
  text-transform: capitalize;
`

const WrapperForm = styled.div`
  padding: .5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 80px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

const Form = styled.form``

const GridCompanies = styled.div`
  background-color: #fff;
  width: 100%;
  position: relative;
  top: 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 180px;
  justify-items: center;
  gap: 2rem;
  padding: 1rem;
`


export {
  Form,
  GridCompanies,
  Title,
  Wrapper,
  WrapperForm,
  WrapperSearch
}