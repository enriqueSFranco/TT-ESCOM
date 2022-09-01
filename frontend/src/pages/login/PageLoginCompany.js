import LoginCompany from 'components/Form/login/LoginCompany';
import background from 'assets/images/reclutamiento-interno.jpg'

const Container = {
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100vh',
  background: `url(${background}) no-repeat`,
  backgroundSize: 'cover'
};

const PageLoginCompany = () => {
  return (
    <section style={Container}>
      <LoginCompany />
    </section>
  )
};

export default PageLoginCompany;