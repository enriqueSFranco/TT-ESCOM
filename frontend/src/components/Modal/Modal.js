import { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Button,
  WrapperModal,
  ModalContainer,
  ModalHeader,
  ModalContent,
} from "./styled-components/ModalStyled";
import './styled-components/animation.css'

const Modal = ({ children, root }) => {
  const ref = useRef(null);

  function callback() {
    unmountComponentAtNode(root); // destruimos la referencia del componente
    let $el = document.getElementById("modal")
    $el.remove()
    ref.current.removeEventListener("animationend", callback);
  }
  
  function handleClick() {
    // detectamos cuando la animacion termine
    ref.current.classList.add('fadeOut')

    ref.current.addEventListener("animationend", (e) => callback, {
      once: true,
    });
  }

  return (
    <WrapperModal ref={ref}>
      <ModalContainer>
          <Button onClick={handleClick}>
            <AiOutlineCloseCircle />
          </Button>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </WrapperModal>
  );
};

export default Modal;
