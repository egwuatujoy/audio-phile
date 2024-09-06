import Equipment from "./Equipment";

const Equipments = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center mt-56 ">
        <Equipment>
          <img
            src="/images/headphone1.png"
            alt=""
            className=" w-1/2 absolute left-20 bottom-52   "
          />

          <h1 className="text-center">HEADPHONES</h1>
          <a href="#" className="flex justify-center items-center gap-2">
            SHOP
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>

        <Equipment>
          <img
            src="/images/speaker1.png"
            alt=""
            className=" w-1/2 absolute  left-20 bottom-52 "
          />

          <h1 className="text-center">SPEAKERS</h1>
          <a href="#" className="flex justify-center items-center gap-2">
            SHOP
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>

        <Equipment>
          <img
            src="/images/earpod1.png"
            alt=""
            className=" w-1/2 absolute  left-20 bottom-52  "
          />

          <h1 className="text-center">EARPHONES</h1>
          <a href="#" className="flex justify-center items-center gap-2">
            SHOP
            <img src="/images/arrow.png" alt="" />
          </a>
        </Equipment>
      </div>
    </section>
  );
};

export default Equipments;
