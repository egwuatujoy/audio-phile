import { Link } from "react-router-dom";
import Equipment from "./Equipment";

const Equipments = () => {
  return (
    <section>
      <div className="  grid max-sm:grid-cols-1 grid-cols-3 gap-8  font-semibold text-lg mt-44 px-5">
        <Equipment>
          <img
            src="/images/headphone1.png"
            alt=""
            className="  font-semibold text-lg absolute bottom-44 left-0 right-0  "
          />

          <h1 className=" mb-5 font-semibold text-lg  text-center ">
            HEADPHONES
          </h1>
          <Link
            to={"/headphones"}
            className=" font-semibold text-lg flex items-center  justify-center gap-2 "
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" className="m-0 max-w-5 " />
          </Link>
        </Equipment>
        <Equipment>
          <img
            src="/images/SmallSpeaker.svg"
            alt=""
            className="  font-semibold text-lg absolute bottom-44 left-0 right-0"
          />

          <h1 className="text-center mb-5 font-semibold text-lg ">SPEAKERS</h1>
          <Link
            to={"/speakers"}
            className=" font-semibold text-lg flex items-center  justify-center gap-2 "
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" className="m-0 max-w-5 " />
          </Link>
        </Equipment>

        <Equipment>
          <img
            src="/images/earpod1.png"
            alt=""
            className="  font-semibold text-lg absolute bottom-44 left-0 right-0 "
          />

          <h1 className="text-center mb-5 font-semibold text-lg  ">
            EARPHONES
          </h1>
          <Link
            to={"/earphones"}
            className=" font-semibold text-lg flex items-center  justify-center gap-2 "
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" className="m-0 max-w-5 " />
          </Link>
        </Equipment>
      </div>
    </section>
  );
};

export default Equipments;
