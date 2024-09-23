import ProductName from "./ProductName";
import Button from "./Button";
const MainSpeaker = () => {
  return (
    <section className="mx-5  mb-16">
      <div className="bg-[url('/images/SpeakerRow.jpg')]  bg-no-repeat rounded-md  bg-full ">
        <div className=" px-10 py-32 ">
          <h1 className="text-4xl tracking-wide font-semibold uppercase ">
            zx7 speaker
          </h1>
          <Button style={"hover:bg-black hover:text-white"} />
        </div>
      </div>
    </section>
  );
};

export default MainSpeaker;
