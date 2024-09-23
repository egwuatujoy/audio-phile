import Button from "./Button";
import ProductName from "./ProductName";
const MainEarphones = () => {
  return (
    <div className="mb-16 mx-5 max-md:block flex justify-center items-center">
      <div className="max-sm:mb-10  ">
        <img
          src="/images/MainEarphone.svg"
          alt=""
          className="rounded-md w-full "
        />
      </div>
      <div className=" bg-lightGray rounded-md">
        <div className=" px-10 py-28">
          <h1 className="text-4xl tracking-wide font-semibold uppercase ">
            yx1 earphones
          </h1>
          <Button style={"hover:bg-black hover:text-white "} />
        </div>
      </div>
    </div>
  );
};

export default MainEarphones;
