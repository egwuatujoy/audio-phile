import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className=" mx-5 my-20">
      <Link to={"/"} className=" text-light text-sm">
        Go Back
      </Link>
      <div className="flex justify-center items-center gap-6 ">
        <img src="/images/Hpage.jpg" alt="" className="w-1/2 rounded-sm" />
        <div>
          <h2 className="text-orange  text-xs tracking-overWide mb-5 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-2xl  font-semibold   mb-5">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="  text-sm  mb-8 ">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <h2 className="text-black font-semibold">$ 2.999</h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-lightGray py-2 px-2 w-fit mt-6">
              <button>-</button>
              <p className="text-xs text-black">1</p>
              <button>+</button>
            </div>

            <button className="bg-orange border-0 text-white py-3 px-2 hover:bg-gray-200 text-xs   border-black   font-semibold uppercase mt-6  ease-linear  duration-300 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
