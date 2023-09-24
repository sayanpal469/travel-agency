import logo1 from "../assets/feature/Group 4444 (2).png";
import logo2 from "../assets/feature/Group 4444 (1).png";
import logo3 from "../assets/feature/Group 4444.png";
import video2 from "../assets/video2.mp4";
import Fade from "react-reveal/Fade";
const Feature = () => {
  return (
    <Fade right cascade>
      <div id="whyUs" style={{ background: "#edf2f8" }}>
        <section className="text-gray-600 body-font max-w-7xl mx-auto">
          <div className="container px-5 py-24 mx-auto flex flex-wrap  justify-between items-center">
            <div className="lg:max-w-xl md: w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <h1 className="text-[30px] font-bold mb-10">
              Embark on Exciting Adventures <br /> Packed with Fun! 🎉
              </h1>
              <div>
                <video
                  autoPlay
                  muted
                  loop
                  className="object-cover object-center h-[327px] w-full"
                >
                  <source src={video2} type="video/mp4" />{" "}
                  {/* Add your video source and type */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex flex-wrap lg:py-6  lg:w-1/2 lg:pl-12 h-[580px] lg:text-left text-center">
              <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
                <div className="">
                  <img src={logo1} alt="" />
                </div>
                <div className="flex-grow mb-5 sm:mb-0">
                  <h2 className="text-lg font-semibold mb-3">
                    Affordable prices
                  </h2>
                  <p className="leading-relaxed text-base">
                    We provide some very affordable prices compared to others.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
                <div className="">
                  <img src={logo2} alt="" />
                </div>
                <div className="flex-grow mb-5 sm:mb-0">
                  <h2 className="text-lg font-semibold mb-3">
                    Unforgettable experience
                  </h2>
                  <p className="leading-relaxed text-base">
                    We provide a vacation experience that will be unforgettable.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
                <div className="">
                  <img src={logo3} alt="" />
                </div>
                <div className="flex-grow mb-5 sm:mb-0">
                  <h2 className="text-lg font-semibold mb-3">
                    Very Friendly Service
                  </h2>
                  <p className="leading-relaxed text-base">
                    We will provide excellent and friendly service for the sake
                    of our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Feature;
