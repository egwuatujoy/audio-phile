const ReferProducts = () => {
  return (
    <div className="px-5">
      <h1 className="text-2xl tracking-wide font-semibold uppercase mb-5">
        you may also like
      </h1>

      <div className="grid grid-cols-3 text-center place-items-end gap-x-5  ">
        <div>
          <img
            src="/images/ReferImg1.jpg"
            alt=""
            className=" rounded-md mb-5 "
          />
          <h1 className="text-2xl mb-5 font-semibold racking-wide uppercase">
            XX99 Mark I
          </h1>

          <button className="bg-orange border-0 text-white py-3 px-2 hover:bg-gray-200 text-xs   border-black   font-semibold uppercase   ease-linear  duration-300 ">
            See Product
          </button>
        </div>

        <div>
          <img
            src="/images/ReferImg2.jpg"
            alt=""
            className=" rounded-md mb-12"
          />
          <h1 className="text-2xl  font-semibold mb-5 tracking-wide uppercase">
            {" "}
            XX59
          </h1>

          <button className="bg-orange border-0 text-white py-3 px-2 hover:bg-gray-200 text-xs   border-black   font-semibold uppercase   ease-linear  duration-300 ">
            See Product
          </button>
        </div>

        <div>
          <img
            src="/images/ReferImg3.jpg"
            alt=""
            className=" rounded-md mb-5 "
          />
          <h1 className="text-2xl  font-semibold mb-5 tracking-wide uppercase">
            ZX9 Speaker
          </h1>

          <button className="bg-orange border-0 text-white py-3 px-2 hover:bg-gray-200 text-xs   border-black   font-semibold uppercase  ease-linear  duration-300 ">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferProducts;
