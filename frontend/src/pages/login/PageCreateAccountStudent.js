import CreateAccountStudent from "components/Form/register/CreateAccountStudent";

const Container = {
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
  backgroundImage:
    "linear-gradient(to right top, #051937, #0e3e65, #0f6893, #0896c1, #12c6eb)",
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
