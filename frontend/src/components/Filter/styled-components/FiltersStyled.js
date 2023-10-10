import styled from 'styled-components'

const ButtonShowFilters = styled.button`
  border: none;
  outline: none;
  padding: 6px 10px;
  margin-bottom: .5rem;
  background-color: #fff;
  border-radius: 10px;
  transition: background-color 0.5s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  z-index: 99;

  ${props => {
    if (props.isActive) {
      return `
      color: #1c8efb;
        background-color: #eee;
      `
    }
  }}

  &:hover {
    background-color: #eee;
  }
`;

export { ButtonShowFilters }