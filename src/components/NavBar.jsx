import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-black text-white ">
      <nav className="flex justify-between px-10 py-8 items-center ">
      
        <div className="flex justify-center items-center gap-8  overflow-hidden ">


          <button onClick={() => setToggle(!toggle)}>
            <img src="/images/Group.png" alt="" />
          </button>

          <div>
            <img src="/images/audiophile 2.png" alt="" />
          </div>

          <div
            className={`absolute left-0  top-20 h-0  w-full bg-black  ease-linear duration-75 ${
              toggle ? "h-1/2" : "h-0"
            }`}
          >
            <ul className={toggle ? "block" : "hidden"}>
              <li className=" p-7  hover:bg-lightgray hover:text-orange ">
                <a href="#home">HOME</a>
              </li>
              <li className=" p-7 hover:bg-lightgray hover:text-orange">
                <a href="#recipe">HEADPHONES</a>
              </li>
              <li className=" p-7 hover:bg-lightgray hover:text-orange">
                <a href="#popular">SPEAKERS</a>
              </li>
              <li className=" p-7  hover:bg-lightgray hover:text-orange">
                <a href="#delivery">EARPHONES</a>
              </li>
            </ul>
          </div>


        </div>

        <div>
          <img src="/images/Combined Shape.png" alt="" />
        </div>

      </nav>
    </header>
  );
};

export default NavBar;
