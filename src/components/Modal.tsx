
import { useRef } from "react"
import { unmountComponentAtNode } from "react-dom"
import BaseButton from "./BaseButton"

interface ModalProps {
  children: React.ReactNode
  root: Node
}

export const Modal: React.FC<ModalProps> = ({ children, root }) => {
  const ref = useRef(null)

  function callback () {
    unmountComponentAtNode(root) // destruimos la referencia del componente
    let $el = document.getElementById("modal")
    $el.remove()
    ref.current.removeEventListener("animationend", callback)
  }

  function handleClick () {
    // detectamos cuando la animacion termine
    ref.current.classList.add('fadeOut')

    ref.current.addEventListener("animationend", (e) => callback, {
      once: true,
    })
  }

  return (
    <article ref={ref}>
      <header>
        <BaseButton>
          <span>❌</span>
        </BaseButton>
      </header>
      <div>{children}</div>
    </article>
  )
}
