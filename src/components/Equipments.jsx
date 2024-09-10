import Equipment from "./Equipment";

const Equipments = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center mb-5 font-semibold text-lg  mx-5 font-semibold text-lg mt-56 ">
        <Equipment>
          <img
            src="/images/headphone1.png"
            alt=""
            className="  font-semibold text-lg absolute left-36 bottom-44  "
          />

          <h1 className="text-center mb-5 font-semibold text-lg   ">
            HEADPHONES
          </h1>
          <a
            href="#"
            className="flex justify-center  text-center  items-center mb-5 font-semibold text-lg  gap-2"
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>
        <Equipment>
          <img
            src="/images/speaker1.png"
            alt=""
            className=" font-semibold text-lg absolute left-36  bottom-44  "
          />

          <h1 className="text-center mb-5 font-semibold text-lg ">SPEAKERS</h1>
          <a
            href="#"
            className="flex justify-center text-center items-center mb-5 font-semibold text-lg  gap-2 "
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>

        <Equipment>
          <img
            src="/images/earpod1.png"
            alt=""
            className=" font-semibold text-lg absolute left-32 bottom-44  "
          />

          <h1 className="text-center mb-5 font-semibold text-lg  ">
            EARPHONES
          </h1>
          <a
            href="#"
            className="flex justify-center text-center   items-center mb-5 font-semibold text-lg  gap-2"
          >
            <span className="text-neutral-500 "> SHOP</span>
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>
      </div>
    </section>
  );
};

export default Equipments;
