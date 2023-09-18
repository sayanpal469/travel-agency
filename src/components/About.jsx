import Image from '../assets/Screenshot_1.png'

const About = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto" id='about'>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="title-font text-sm tracking-widest font-semibold text-gray-400">
          ABOUT US
          </h3>
          <h1 className="sm:text-3xl lg:text-5xl md:text-3xl font-bold text-black my-3">
          Makes your self at home and enjoy a unique experience
          </h1>

          <h2 className="text-lg mb-2 text-gray-500">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas <br /> erat dignissim.</h2>
          
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores tenetur repellat laudantium eos non quod sint quidem velit eius fugiat possimus, molestias suscipit praesentium obcaecati dicta et ipsa, qui reprehenderit illo amet. Deleniti nesciunt repudiandae qui illo quia eum libero totam culpa aliquid. Alias ex perferendis voluptatibus quis. Maxime.</p>
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Image}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
