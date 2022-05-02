import LoginStudentUpdateInformation from "components/Form/FirstFormStudet/Step";

const Container = {
  // backgroundColor: "blue",
  fontFamily: "sans-serif",
  width: "100%",
  height: "100vh",
};

const Form = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "green"
};

const PageLoginStudent = () => {
  return (
    <section style={Container}>
      <article style={Form}>
        <LoginStudentUpdateInformation />
      </article>
    </section>
  );
};

export default PageLoginStudent;
