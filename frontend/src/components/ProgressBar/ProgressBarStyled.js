import styled from 'styled-components'

const WrapperProgress = styled.div`
  width: 100%;
  height: 15px;
  background-color: #ccc;
  border-radius: 10px;
`

const Progress = styled.div`
  width: ${props => `${props.progress}%`};
  color: #FFF;
  background-color: ${props => props.bg || '#116BFE'};
  height: inherit;
  border-radius: 10px;
  position: relative;
`

const ProgressText = styled.span`
  position: absolute;
  right: .5rem;
  font-size: .7rem;
  font-weight: 700;
`

export { Progress, ProgressText, WrapperProgress }