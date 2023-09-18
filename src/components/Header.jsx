import headerVideo from "../assets/video (720p).mp4";

const Header = () => {
  return (
    <div className="header h-screen">
      <div className="absolute inset-0 w-full h-full bg-opacity-50 bg-gray-800 z-10" />
      <video
        autoPlay
        muted
        loop
        id="background-video"
        className="absolute inset-0 w-full h-full object-cover z-0 "
      >
        <source src={headerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-sm font-bold tracking-widest">LUXURY B&B EXPERIENCE</h1>
        <h2 className="text-5xl font-semibold my-4">LUXURY BED&BREAKFAST</h2>
        <h2 className="text-5xl font-semibold">WHERE TO STAY</h2>
      </div>
    </div>
  );
};

export default Header;
