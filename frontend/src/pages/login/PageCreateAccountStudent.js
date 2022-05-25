import CreateAccountStudent from "components/Form/register/CreateAccountStudent";

const Container = {
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
  backgroundImage: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
};

const PageCreateAccountStudent = () => {
  return (
    <>
      <section style={Container}>
        <CreateAccountStudent />
      </section>
    </>
  );
};

export default PageCreateAccountStudent;
