import Button from "./Button";

const Home = () => {
  return (
    <section className="w-full bg-lightgray">
      <div className=" w-full bg-[url('/images/home-img.jpg')] bg-no-repeat bg-cover  bg-center  ">
        <div className="text-white text-center py-44">
          <h2 className="text-neutral-500  text-sm tracking-overWide mb-5 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-4xl  font-semibold  mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-lg mb-8 px-16">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            style={"text-lg bg-orange px-12 py-3.5 font-semibold uppercase"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
