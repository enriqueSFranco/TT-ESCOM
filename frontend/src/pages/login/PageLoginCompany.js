import LoginCompany from 'components/Form/login/LoginCompany';

const Container = {
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100vh',
  backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
};

const Form = {
  position: 'relative',
  top: '7rem',
}

const PageLoginCompany = () => {
  return (
    <section style={Container}>
      <article style={Form}>
        <LoginCompany />
      </article>
    </section>
  )
};

export default PageLoginCompany;