import { useScroll } from '../hooks'

export const SpyButton: React.FC = () => {
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
          <button onClick={goToTop}>⬆️</button>
        )
      }
    </>
  )
}
