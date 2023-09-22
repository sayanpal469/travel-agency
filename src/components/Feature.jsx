import One from "../assets/tour place/place1.jpg";
import logo1 from "../assets/feature/Group 4444 (2).png";
import logo2 from "../assets/feature/Group 4444 (1).png";
import logo3 from "../assets/feature/Group 4444.png";

const Feature = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:max-w-xl md: w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <h1 className="text-[48px] font-bold">
            Get Experience <br /> Which are fun
          </h1>
          <p className="text-[16px] my-5">
            With travala you can get the best experience on holiday travel, and
            we always update the latest and best destinations in the world
          </p>
          <img
            alt="feature"
            className="object-cover object-center h-[327px] w-[518px] top[1151px] left[92px]"
            src={One}
          />
        </div>
        <div className="flex flex-wrap lg:py-6 mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
            <div className="">
              <img src={logo1} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-3">Affordable prices</h2>
              <p className="leading-relaxed text-base">
                We provide some very affordable prices compared to others.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="">
              <img src={logo2} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-3">Affordable prices</h2>
              <p className="leading-relaxed text-base">
                We provide some very affordable prices compared to others.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
            <div className="">
              <img src={logo3} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-3">Affordable prices</h2>
              <p className="leading-relaxed text-base">
                We provide some very affordable prices compared to others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
