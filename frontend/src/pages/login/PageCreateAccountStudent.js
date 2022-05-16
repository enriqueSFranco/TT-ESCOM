import CreateAccountStudent from "components/Form/register/CreateAccountStudent";

const Container = {
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
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
