import React from "react";
import { useViewport } from "hooks/useViewport";
import { useScroll } from "hooks/useScroll";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { ButtonScroll } from "./styled-compoents/ButtonScrollTopStyled";

const ButtonScrollTop = () => {
  const visible = useScroll(400, false)
  const [viewport] = useViewport()

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (viewport.device === 'MOBILE') {
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
    )
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
