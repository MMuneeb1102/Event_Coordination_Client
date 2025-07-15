import DynamicTitle from "../components/DynamicTitle";
import HomeMainSection from "../components/home-section/HomeMainSection";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  DynamicTitle("Home");
  return (
    <div>
      <HomeMainSection />
    </div>
  );
};

export default Home;
