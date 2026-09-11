import bannerImage from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto bg-black p-8 rounded-3xl text-white my-7">
      <img src={bannerImage} alt="" />

      <h2 className="font-bold text-4xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="font-medium text-xl text-[#7A7A7A]">
        Beyond Boundaries Beyond Limits
      </p>
      <p className="bg-[#E7FE29] text-black font-bold p-3 w-45 rounded-xl">
        Claim Free Credit
      </p>
    </div>
  );
};

export default Banner;
