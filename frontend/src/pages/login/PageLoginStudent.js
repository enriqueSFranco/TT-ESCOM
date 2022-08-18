import LoginStudent from "components/Form/login/LoginStudent";

const Container = {
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
  backgroundImage: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
};

const PageLoginStudent = () => {
  return (
    <section style={Container}>
      <LoginStudent />
    </section>
  );
};

export default PageLoginStudent;
