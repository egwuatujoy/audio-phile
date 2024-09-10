import Button from "./Button";
import ProductName from "./ProductName";
const SpeakerZ = () => {
  return (
    <section className=" mb-36 grid place-content-center mx-6">
      <div className="bg-[url('/images/speakerZ.png')] bg-no-repeat bg-cover w-full p-9 text-center ">
        <div className="text-white">
          <img src="./images/newer.svg" alt="" className="w-3/5 m-auto " />
          <ProductName
            style={"text-3xl text-center font-semibold uppercase mt-7"}
            name={"ZX9 SPEAKER"}
          />
          <p className="mt-7 text-center tracking-wider text-lg  ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        </div>

        <Button
          style={
            "text-base text-white bg-black px-8 py-3 font-semibold uppercase mt-12 flex  items-center "
          }
        />
      </div>
    </section>
  );
};

export default SpeakerZ;
