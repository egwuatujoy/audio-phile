import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="flex justify-between px-10 py-8 items-center ">
        <div className="flex justify-center items-center gap-8  ">
          <button onClick={() => setToggle(!toggle)}>
            <img src="/public/images/Group.png" alt="" />
          </button>

          <div>
            <img src="/public/images/audiophile 2.png" alt="" />
          </div>

          <div
            className={`fixed  left-0 py-10 px-10 w-full bg-black  ${
              toggle ? "top-20" : "top-full"
            }   `}
          >
            <ul className={toggle ? "block" : "hidden"}>
              <li className="pb-12">
                <a href="#home">HOME</a>
              </li>
              <li className="pb-12">
                <a href="#recipe">HEADPHONES</a>
              </li>
              <li className="pb-12">
                <a href="#popular">SPEAKERS</a>
              </li>
              <li>
                <a href="#delivery">EARPHONES</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/public/images/Combined Shape.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
