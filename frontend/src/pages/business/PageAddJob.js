import FormPostJob from "components/Form/postJob/FormPostJob";

const Container = {
  width: "100%",
  height: "100%",
  // backgroundColor: "red"
}

const PageAddJob = () => {
  return (
    <section style={Container}>
      <FormPostJob />
    </section>
  );
};

export default PageAddJob;
