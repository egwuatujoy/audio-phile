import Button from "./Button";
import ProductName from "./ProductName";

const SpeakerZ = () => {
  return (
    <section className=" mb-10  mx-6 ">
      <div className="bg-[url('/images/speakerZ.png')] bg-no-repeat bg-cover w-full p-9 text-center  rounded-md ">
        <div className="text-white flex justify-center items-center gap-14 max-sm:block">
          <img src="./images/speaker.svg" alt="" className="w-3/5 m-auto " />
          <div >
            <ProductName name={"ZX9 SPEAKER"} />
            <p className="mt-7  tracking-wider text-white    ">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button style="bg-black text-white hover:bg-light hover:border-light " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerZ;
