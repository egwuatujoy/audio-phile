import { Link } from "react-router-dom";
import Equipments from "../components/Equipments";
import Audio from "../components/Audio";
import Footer from "../components/Footer";

const HeadPhonePage = () => {
  return (
    <div>
      <h1 className="bg-black text-white uppercase">HeadPhones</h1>
      <img src="/images/HeadPhonePage.png" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold   mb-5">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="F text-sm  mb-8 px-16">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link
          to={"/cart"}
          className="bg-orange border-0 text-white py-4  hover:bg-gray-200 text-xs   border-black px-8  font-semibold uppercase mt-6  ease-linear  duration-300 "
        >
          See Product
        </Link>
      </div>

      <img src="/images/HeadPhone3.svg" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold uppercase   mb-5">
          XX99 Mark I Headphones
        </h1>
        <p className="F text-sm  mb-8 px-16">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>

        <Link
          to={"/cart"}
          className="bg-orange border-0 text-white py-4  hover:bg-gray-200 text-xs   border-black px-8  font-semibold uppercase mt-6  ease-linear  duration-300 "
        >
          See Product
        </Link>
      </div>

      <img src="/images/HeadWhite.svg" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold  uppercase  mb-5">
          XX59 Headphones
        </h1>
        <p className="F text-sm  mb-8 px-16">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>

        <Link
          to={"/cart"}
          className="bg-orange border-0 text-white py-4  hover:bg-gray-200 text-xs   border-black px-8  font-semibold uppercase mt-6  ease-linear  duration-300 "
        >
          See Product
        </Link>
      </div>

      <Equipments />
      <Audio />
      <Footer />
    </div>
  );
};

export default HeadPhonePage;
