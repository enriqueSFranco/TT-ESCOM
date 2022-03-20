import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import PageJobList from "./PageJobList";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Search />
      <Filter />
      <PageJobList />
      <Footer />
    </>
  );
};

export default Home;
