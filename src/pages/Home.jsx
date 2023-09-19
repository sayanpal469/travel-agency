import About from "../components/About";
import Destinations from "../components/Destinations";
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
            <TourPlaces/>
        </div>
    );
};

export default Home;