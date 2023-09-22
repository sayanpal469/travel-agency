import About from "../components/About";
import Contact from "../components/Contact";
import Destinations from "../components/Destinations";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TourPlaces from "../components/TourPlaces";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Destinations/>
            <Feature/>
            <TourPlaces/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;