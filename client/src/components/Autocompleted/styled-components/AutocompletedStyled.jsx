import styled from "styled-components";

const WrapperAutocompleted = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  top: .9rem;
  overflow-y: auto;
  border-radius: .5rem;
  background-color: #000000be;
  backdrop-filter: blur(10px);
  color: #fff;
  z-index: 999;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    border-radius: .5rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 1rem;
  }
`

const List = styled.ul``

const Item = styled.li`
  padding: .5rem;
  list-style: none;
  text-transform: lowercase;
  margin: .5rem .5rem 1rem .5rem;
  cursor: pointer;
`

export { Item, List, WrapperAutocompleted }