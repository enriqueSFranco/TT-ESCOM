import { useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError()

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
