import bannerImage from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto my-8 rounded-3xl bg-black px-6 py-10 text-center text-white md:px-12 md:py-14">
      {" "}
      {/* Banner Image */}{" "}
      <img
        src={bannerImage}
        alt="Dream 11 Cricket Team"
        className="mx-auto mb-6 w-full max-w-md"
      />{" "}
      {/* Heading */}{" "}
      <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
        {" "}
        Assemble Your Ultimate Dream 11 Cricket Team{" "}
      </h2>{" "}
      {/* Subtitle */}{" "}
      <p className="mt-4 text-lg font-medium text-gray-400 md:text-xl">
        {" "}
        Beyond Boundaries, Beyond Limits{" "}
      </p>{" "}
      {/* CTA */}{" "}
      <button className="mt-7 rounded-xl bg-[#E7FE29] px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#dfff00]">
        {" "}
        Claim Free Credit{" "}
      </button>{" "}
    </div>
  );
};

export default Banner;
