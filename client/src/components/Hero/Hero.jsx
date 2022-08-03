import React from 'react'
import { Background, Image, WrapperHero } from './styled-components/HeroStyled'
import hero from '../../assets/images/parallaxESCOM.jpg'

const Hero = ({children = null}) => {
  return (
    <WrapperHero position="relative">
      <Background>
        <Image src={hero} alt='parallaxESCOM' />
      </Background>
      {children}
    </WrapperHero>
  )
}

export default Hero