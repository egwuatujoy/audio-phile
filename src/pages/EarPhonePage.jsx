import { Link } from "react-router-dom";
import Equipments from "../components/Equipments";
import Audio from "../components/Audio";
import Footer from "../components/Footer";
const EarPhonePage = () => {
  return (
    <div>
      <img src="/images/EarPage1.svg" alt="" />
      <div className="text-black text-center py-44">
        <h2 className="text-orange text-sm tracking-overWide mb-5 ">
          NEW PRODUCT
        </h2>
        <h1 className="text-3xl  font-semibold uppercase   mb-5">
          YX1 Wireless Earphones
        </h1>
        <p className="F text-sm  mb-8 px-16">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
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
      <Footer/>
    </div>
  );
};

export default EarPhonePage;
