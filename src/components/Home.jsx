import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="w-full bg-lightgray ">
      <div className=" w-full bg-[url('/images/home-img.jpg')] bg-no-repeat bg-cover  bg-center px-5  ">
        <div className="text-white text-center px-10 py-44">
          <h2 className="text-neutral-500  text-sm tracking-overWide mb-5 ">
            NEW PRODUCT
          </h2>
          <h1 className=" max-sm:text-4xl text-6xl  font-semibold   mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className=" text-white text-2xl  mb-8 px-16">
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
