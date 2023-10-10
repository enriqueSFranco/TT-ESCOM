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


const WrapperCircle = styled.div` 
  position: relative;
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const MainWrapper = styled.div`
  position: relative;
  top: 3.5rem;
  width: calc(100% - 2rem);
  height: calc(100% - 4rem);
  text-align: center;
  font-size: 1.2rem;
`

const CircleDelete = styled.div`
  height: 8rem;
  width: 8rem;
  position: absolute;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #fc1f39;
`

const TittleProjectExperience = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 2rem;
  color: #c52707;
  background-color: #fbe5d5;
  padding: 1rem;
  font-size: 1em;
  font-weight: normal;
  border-radius: 5px;
`

const BtnDeleteExperience = styled.button`
  border: none;
  height: 3rem;
  width: 120px;
  border-radius: 5px;
  color: #C52707;
  font-size: 1rem;
  font-weight: 400;
  background-color: #FBE5D5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: background-color .3s ease;
  position: relative;
  top: 3rem;

  &:hover {
    background-color: red;
    color: #fff;
    font-weight: 700;
  }
`

export { WrapperList, HeaderTop, MainWrapper, BtnDeleteExperience, TittleProjectExperience, CircleDelete, WrapperCircle }