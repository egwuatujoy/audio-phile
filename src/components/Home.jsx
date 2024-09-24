import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="w-full bg-lightgray ">
      <div className=" container w-full bg-[url('/images/home-img.jpg')] bg-no-repeat bg-contain bg-right-top max-md:bg-cover max-md:bg-center ">
        <div className="text-white max-md:text-center max-w-2xl text-left max-md:px-5 py-44 px-32 ">
          <h2 className="text-neutral-500  text-sm tracking-overWide mb-5 ">
            NEW PRODUCT
          </h2>
          <h1 className=" max-sm:text-4xl text-6xl  font-semibold   mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className=" text-white max-w-96  max-md:max-w-2xl   mb-8 ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link
            to={"/cart"}
            className="bg-orange border-0 text-white py-4  hover:bg-gray-200 text-xs   border-black px-8  font-semibold uppercase mt-6  ease-linear  duration-300 "
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
