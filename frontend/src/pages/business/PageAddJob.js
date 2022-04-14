import FormPostJob from "components/Form/postJob/FormPostJob";

const Container = {
  position: "relative",
  top: "4rem",
  width: "100%",
  height: "100%",
}

const PageAddJob = () => {
  return (
    <section style={Container}>
      <FormPostJob />
    </section>
  );
};

export default PageAddJob;
