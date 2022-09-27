import styled from 'styled-components'

const WrapperProgress = styled.div`
  width: 100%;
  height: 15px;
  background-color: #ccc;
  border-radius: 10px;
`

const Progress = styled.div`
  width: ${props => `${props.progress}%`};
  /* width: 45%; */
  background-color: red;
  height: inherit;
  border-radius: 10px;
  position: relative;
`

const ProgressText = styled.span`
  position: absolute;
  right: .5rem;
  font-size: .7rem;
`

export { Progress, ProgressText, WrapperProgress }