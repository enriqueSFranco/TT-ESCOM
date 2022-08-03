import React, { useRef } from 'react'
import { IoIosClose } from 'react-icons/io'
import { Button, Content, Header, Title, Wrapper } from './styled-components/ModalStyled'
import styles from './styled-components/animation.module.css'

const Modal = ({ children, title, root }) => {
  const modalRef = useRef(null);

  const callback = (e) => {
    root.unmount();
    document.querySelector('#modal').remove();
  }

  const handleClick = () => {
    modalRef.current.classList.add(styles.fadeOut);
    modalRef.current.addEventListener('animationend', callback , { once: true })
  }

  return (
    <Wrapper ref={modalRef}>
      <Header>
        <Title>{title}</Title>
        <Button onClick={handleClick}><IoIosClose /></Button>
      </Header>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Modal