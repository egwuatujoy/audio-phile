const Home = () => {
  return (
    <section className="w-full bg-lightgray">
      <div className=" w-full bg-[url('/public/images/home-img.jpg')] bg-no-repeat bg-contain    ">
        <div className="text-white text-center py-56 px-44 ">
          <h2 className="text-neutral-500  text-sm tracking-overWide mb-5 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-4xl  font-semibold  mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-xs mb-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-xs bg-orange px-8 py-4 font-semibold">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
