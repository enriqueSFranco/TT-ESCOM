import LoginStudent from "components/Form/login/LoginStudent";

const Container = {
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100vh'
};

const Form = {
  position: 'relative',
  top: '7rem',
}

const PageLoginStudent = () => {
  return (
    <>
      <section style={Container}>
        <article style={Form}>
          <LoginStudent />
        </article>
      </section>
    </>
  )
}

export default PageLoginStudent;
