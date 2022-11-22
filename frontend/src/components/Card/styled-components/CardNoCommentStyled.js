import styled from 'styled-components'

const SkeletonCard = styled.div`
  width: 400px;
  height: 110px;
  background-color: #fff;
  position: relative;
  bottom: 10rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 100px 1fr;
`

const WrapperImage = styled.div`
  display: grid;
  place-content: center;
`

const Image = styled.div`
  width: 45px;
  height: 45px;
  background-color: #E7E7E7;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: -.64rem;
    width: 65px;
    height: 65px;
    border: ${props => `4px solid ${props.borderColor || '#AC90EB'}`};
    border-radius: 50%;
  }

`

const WrapperParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .7rem;
  padding: 0 .5rem;
  `

const SkeletonParagraph = styled.p`
  background-color: #EFEFEF;
  display: block;
  width: 100%;
  height: 20px;
  border-radius: 5px;
  margin: 0;

  &:nth-child(2) {
    width: 60%;
  }
`

export { SkeletonCard, WrapperImage, WrapperParagraph, SkeletonParagraph, Image }
