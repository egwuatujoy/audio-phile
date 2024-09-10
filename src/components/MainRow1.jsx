import ProductName from "./ProductName";
import Button from "./Button";
const MainRow1 = () => {
  return (
    <div className="bg-[url('/images/SpeakerRow.jpg')]  bg-no-repeat mb-14 rounded-md    ">
      <div className=" px-20 py-20">
        <ProductName
          name={"ZX7 SPEAKER"}
          style={"text-2xl tracking-wide  font-bold uppercase mt-7"}
        />
        <Button
          style={
            "text-xs text-black  border-2 border-black px-8 py-3 font-semibold uppercase mt-6 "
          }
        />
      </div>
    </div>
  );
};

export default MainRow1;
