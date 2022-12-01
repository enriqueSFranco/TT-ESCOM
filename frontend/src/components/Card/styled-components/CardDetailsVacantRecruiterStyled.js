import styled from 'styled-components'

const WrapperLoader = styled.div`
  width: 100vh;
  height: 70vh;
  position: relative;
  left: 10rem;
  display: grid;
  place-content: center;
`

const WraperCard = styled.article`
  width: 100%;
  height: 83%;
  margin: 0 auto;
  background-color: #F7F7F9;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  outline: 2px solid green;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const WrapperComment = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 80%;
  overflow-x: hidden;
  background: #F7F7F9;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const HeaderInfo = styled.header`
`

const Description = styled.div`
  overflow-y: auto;
  height: calc(100% - 21%);
  outline: 2px solid blue;
`

const WrapperActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  .button_admin {
    border: none;
    outline: none;
    padding: .5rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 2px;
    color: #fff;
    font-weight: 600;
    display: flex;
    gap: .3rem;
    align-items: center;
  }

  .publish {
    background-color: #7FBB42;
  }

  .disabled {
    background-color: #eee;
    color: #222;
  }

  .reject {
    background-color: red;
  }
`

const ContentDescription = styled.div`
  height: fit-content;
  overflow-y: auto;
  /* background-color: red; */
`

const ListItems = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
`

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export { WrapperLoader, ContentDescription, WrapperActions, Title, WrapperComment, ListItems, WraperCard, Description, HeaderInfo }