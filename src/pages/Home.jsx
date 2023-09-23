import About from "../components/About";
import Contact from "../components/Contact";
import Destinations from "../components/Destinations";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import TourPlaces from "../components/TourPlaces";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Destinations />
      <Feature />
      <TourPlaces />
      <Review />
      <Contact />
      <Footer />
        <ScrollToTop smooth color="black" className="pl-1"/>
    </div>
  );
};

export default Home;
