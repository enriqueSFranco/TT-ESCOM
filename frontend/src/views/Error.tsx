import { useRouteError } from "react-router-dom"

export const Error: React.FC = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  )
}

export default Error