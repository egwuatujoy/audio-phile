import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-black text-white ">
      <nav className="flex justify-between px-10  max-md:py-8 items-center ">
        <div className="flex justify-center items-center gap-8  overflow-hidden ">
          <button>
            <img
              src="/images/Group.png"
              alt=""
              className="max-md:block hidden"
              onClick={() => setToggle(!toggle)}
            />
          </button>

          <div>
            <img src="/images/audiophile 2.png" alt="" />
          </div>

          <div
            className={`max-md:absolute left-0 top-20  w-full bg-black ease-linear duration-75`}
          >
            <ul
              className={`flex max-md:block overflow-hidden ${toggle ? "max-md:h-3/5" : "max-md:h-0"} bg-black text-xs`}
            >
              <li className=" p-7  hover:bg-lightgray hover:text-orange">
                <Link to="/">HOME</Link>
              </li>
              <li className=" p-7 hover:bg-lightgray hover:text-orange">
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li className=" p-7 hover:bg-lightgray hover:text-orange">
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li className=" p-7  hover:bg-lightgray hover:text-orange">
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/images/Cart.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
