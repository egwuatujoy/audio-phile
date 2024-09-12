import Button from "./Button";
import ProductName from "./ProductName";
const MainEarphones = () => {
  return (
    <div className="mb-16 mx-5">
      <div className="mb-10  ">
        <img src="/images/EarphoneRow.jpg" alt="" className="rounded-md " />
      </div>
      <div className=" bg-lightGray rounded-md">
        <div className=" px-10 py-20">
          <ProductName name={"yx1 earphones"} />
          <Button style={"hover:bg-black hover:text-white "} />
        </div>
      </div>
    </div>
  );
};

export default MainEarphones;
