import { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Button,
  WrapperModal,
  Title,
  ModalContainer,
  ModalHeader,
  ModalContent,
} from "./styled-components/ModalStyled";
import './styled-components/animation.css'

const Modal = ({ children, title = "", root }) => {
  const ref = useRef(null);

  function callback() {
    unmountComponentAtNode(root); // destruimos la referencia del componente
    document.getElementById("modal").remove();
    ref.current.removeEventListener("animationend", callback);
  }
  
  function handleClick() {
    console.log(ref.current.classList)
    // detectamos cuando la animacion termine
    ref.current.classList.add('fadeOut')
    ref.current.addEventListener("animationend", (e) => callback, {
      once: true,
    });
  }

  return (
    <WrapperModal ref={ref}>
      <ModalContainer>
        <ModalHeader>
          <Title>{title}</Title>
          <Button onClick={handleClick}>
            <AiOutlineCloseCircle />
          </Button>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </WrapperModal>
  );
};

export default Modal;
