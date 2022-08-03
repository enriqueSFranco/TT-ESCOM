import styled from "styled-components";

// 👩‍🎓 👨‍💻

const WrapperForm = styled.div`
  /* outline: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  justify-items: center;
`

const Legend = styled.h1`
  /* text-transform: capitalize; */
  letter-spacing: 2px;
  font-weight: 500;
  padding: 1rem;
`

const Button = styled.input`
  height: 2.5rem;
  width: 100%;
  text-transform: capitalize;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: #1b8efb;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color .4s ease-in-out;

  &:hover {
    background-color: #359cfd;
  }
`

const Form = styled.form`
  /* box-shadow: #32325d3f 0px 6px 12px -2px, #0000004c 0px 3px 7px -3px; */
  outline: 2px solid blue;
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  `

const GroupInput = styled.div`
  height: 70px;
  outline: 2px solid rebeccapurple;
`

export { Button, Form, GroupInput, Legend, WrapperForm }