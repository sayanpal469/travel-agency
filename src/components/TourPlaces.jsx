// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../styles/swiper.css";
import Slide from "react-reveal/Slide";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const places = [
  {
    id: 1,
    name: "cox's bazar sea beach",
    imageSrc: "https://i.postimg.cc/2SJnQgqQ/place1.jpg",
    location: "chitagong, bangladesh",
    price: "$2844",
  },
  {
    id: 1,
    name: "nice building",
    imageSrc: "https://i.postimg.cc/HnRTZ0bh/place2.jpg",
    location: "dhaka, bangladesh",
    price: "$2844",
  },
  {
    id: 1,
    name: "sudarban",
    imageSrc: "https://i.postimg.cc/cLQdhnCF/place3.jpg",
    location: "24 pargana, india",
    price: "$2844",
  },
  {
    id: 1,
    name: "norjahan hall",
    imageSrc: "https://i.postimg.cc/KzYFmpNW/place4.jpg",
    location: "kashmir, india",
    price: "$2844",
  },
  {
    id: 1,
    name: "Costa Rica",
    imageSrc: "https://i.postimg.cc/ZRhrn345/3.jpg",
    location: "dhaka",
    price: "$2844",
  },
  {
    id: 1,
    name: "kashmir",
    imageSrc: "https://i.postimg.cc/TYZvKYL4/1.jpg",
    location: "india",
    price: "$2844",
  },
];

const TourPlaces = () => {
  const breakpoints = {
    // When window width is >= 640px (sm)
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is >= 768px (md)
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // When window width is >= 1024px (lg)
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div
      className="bg-white"
      id="tour"
      style={{
        backgroundImage:
          "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h4-slider-img-1.png)",
        backgroundPosition: "center",
        backgroundSize: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-2xl px-8 sm:py-24 lg:max-w-7xl lg:px-4">
        <h1 className="text-5xl tracking-tight  text-gray-600 text-center my-14">
          Upcoming Tour
        </h1>
        <Slide>
          <div>
            <Swiper
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
              breakpoints={breakpoints}
            >
              {places.map((place) => (
                <SwiperSlide
                  key={place.id}
                  className="flex flex-col  bg-gray-100 rounded-md pb-8 cursor-pointer"
                >
                  <div className=" w-[100%] h-80">
                    <img src={place.imageSrc} alt={place.imageAlt} />
                  </div>
                  <div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-lg text-gray-700 capitalize">
                          {place.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 my-2 capitalize">
                          {place.location}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {place.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default TourPlaces;
