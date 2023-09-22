// import Image from "../assets/about.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto" id="about">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:gap-24 gap-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="gallery">
            <img
              src="https://picsum.photos/id/815/400/400"
              alt="Two hands creating a heart and showing the sun"
            />
            <img
              src="https://picsum.photos/id/872/400/400"
              alt="The mountain"
            />
            <img src="https://picsum.photos/id/603/400/400" alt="a river" />
            <img
              src="https://picsum.photos/id/823/400/400"
              alt="a women with a camera"
            />
          </div>
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-2">
          <h3 className="title-font text-sm tracking-widest font-semibold text-gray-400">
            ABOUT US
          </h3>
          <h1 className="text-3xl lg:text-7xl md:text-3xl  text-black">
            Lets Experience{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FF69B4] to-[#0ed715b0]">
              Travel{" "}
            </span>{" "}
            With Us
          </h1>

          <p className="leading-loose font-thin ml-2 text-justify">
            Welcome to{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FF69B4] to-[#0ed715b0]">
              IndaXplorers
            </span>
            , your gateway to unforgettable travel experiences around the India.
            At{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FF69B4] to-[#0ed715b0]">
              IndaXplorers
            </span>
            , we believe that travel isn&apos;t just about visiting new
            destinations; it&apos;s about creating lasting memories, discovering
            new cultures, and making your dreams a reality. Whether you&apos;re
            seeking a relaxing beach getaway, an adventurous trek through the
            mountains, a cultural exploration of historic cities, or anything in
            between, our team of experienced travel experts is here to curate
            the perfect itinerary for you. We specialize in crafting
            personalized journeys that cater to your unique preferences,
            ensuring every trip is a one-of-a-kind adventure. Join us and embark
            on a voyage of discovery, where every destination becomes a story,
            and every moment is a cherished memory. Your dream journey begins
            here.
          </p>
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
