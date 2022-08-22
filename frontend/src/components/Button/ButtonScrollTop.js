import React from "react";
import { useScroll } from "hooks/useScroll";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { ButtonScroll } from "./styled-compoents/ButtonScrollTopStyled";

const ButtonScrollTop = () => {
  const visible = useScroll(400, false)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        visible && (
          <ButtonScroll onClick={goToTop} isVisible={visible}>
            <BsArrowUpSquareFill style={{color: '#1C8EFB'}} />
          </ButtonScroll>
        )
      }
    </>
  );
};

export default ButtonScrollTop;
