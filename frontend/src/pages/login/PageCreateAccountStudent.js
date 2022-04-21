import CreateAccountStudent from 'components/Form/register/CreateAccountStudent';

const Container = {
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100vh'
};

const Form = {
  position: 'relative',
  top: '3rem',
}

const PageCreateAccountStudent = () => {
  return (
    <>
      <section style={Container}>
          <CreateAccountStudent />
        {/* <article style={Form}>
        </article> */}
      </section>
    </>
  )
}

export default PageCreateAccountStudent;
