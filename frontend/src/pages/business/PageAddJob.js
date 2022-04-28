import FormPostJob from "components/Form/postJob/FormPostJob";

const Container = {
  width: "100%",
  height: "calc(100% - 3rem)",
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
