const places = [
  {
    id: 1,
    name: "Kashmir, India",
    imageSrc: "https://i.postimg.cc/TYZvKYL4/1.jpg",
  },
  {
    id: 1,
    name: "cox's bazar, Bangladesh",
    imageSrc: "https://i.postimg.cc/DZH312p0/2.jpg",
  },
  {
    id: 1,
    name: "Costa Rica",
    imageSrc: "https://i.postimg.cc/ZRhrn345/3.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl tracking-tight text-gray-600 text-center">
            Popular Destinations
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
            {places.map((place) => (
              <div key={place.id} className="group relative bg-white pb-8">
                <div className="aspect-h-1 aspect-w-1 w-full rounded-md lg:aspect-none lg:max-h-screen">
                  <img
                    src={place.imageSrc}
                    alt={place.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div>
                    <h3 className="text-lg text-gray-700">{place.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
