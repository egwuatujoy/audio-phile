import ProductName from "./ProductName";
import Button from "./Button";
const MainSpeaker = () => {
  return (
    <div className="bg-[url('/images/SpeakerRow.jpg')]  bg-no-repeat mb-16 rounded-md  mx-5   ">
      <div className=" px-10 py-20">
        <ProductName name={"ZX7 SPEAKER"} />
        <Button style={"hover:bg-black hover:text-white"} />
      </div>
    </div>
  );
};

export default MainSpeaker;
