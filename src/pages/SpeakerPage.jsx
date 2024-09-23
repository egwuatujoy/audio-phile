import { Link } from "react-router-dom";
import Equipments from "../components/Equipments";
import Audio from "../components/Audio";
import Footer from "../components/Footer";
const SpeakerPage = () => {
  return (
    <div>
      <h1 className="bg-black text-white uppercase">speakers</h1>
      <img src="/images/SpeakerPage1.svg" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold uppercase mb-5">ZX9 Speaker</h1>
        <p className="F text-sm  mb-8 px-16">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <Link
          to={"/cart"}
          className="bg-orange border-0 text-white py-4  hover:bg-gray-200 text-xs   border-black px-8  font-semibold uppercase mt-6  ease-linear  duration-300 "
        >
          See Product
        </Link>
      </div>

      <img src="/images/SpeakerPage2.svg" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold uppercase   mb-5">
          ZX7 Speaker
        </h1>
        <p className="F text-sm  mb-8 px-16">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
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

export default SpeakerPage;
