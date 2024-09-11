import Button from "./Button";
import ProductName from "./ProductName";

const SpeakerZ = () => {
  return (
    <section className=" mb-10  mx-6 ">
      <div className="bg-[url('/images/speakerZ.png')] bg-no-repeat bg-cover w-full p-9 text-center  rounded-md ">
        <div className="text-white">
          <img src="./images/speaker.svg" alt="" className="w-3/5 m-auto " />
          <ProductName
            style={
              "text-2xl tracking-wide  text-center font-semibold uppercase mt-7"
            }
            name={"ZX9 SPEAKER"}
          />
          <p className="mt-7 text-center tracking-wider text-white    ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        </div>

        <Button style="bg-black text-white hover:bg-light hover:border-light " />
      </div>
    </section>
  );
};

export default SpeakerZ;
