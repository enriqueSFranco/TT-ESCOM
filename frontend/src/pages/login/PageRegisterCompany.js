import CreateAccountCompany from 'components/Form/register/CreateAccountCompany';
import { Toaster } from 'react-hot-toast';

const Container = {
  backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100vh'
};

const Form = {
  position: 'relative',
  top: '3rem',
}

const PageRegisterCompany = () => {
  return (
    <>
      <section style={Container}>
        <article style={Form}>
          <CreateAccountCompany />
        </article>
      </section>
      <Toaster position='top-right' toastOptions={{duration: 5000}} />
    </>
  )
}

export default PageRegisterCompany;