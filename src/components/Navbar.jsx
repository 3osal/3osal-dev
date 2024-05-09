import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [Nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!Nav);
  return (
    <nav className="h-[80px] flex justify-between items-center w-full border-b-2 border-zinc-950">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <a
              href="/"
              className="text-white capitalize text-[25px] font-bold relative before:absolute before:left-0 before:top-[-5px] before:w-[25px] before:h-[4px] before:bg-main-color"
            >
              3osal
            </a>
          </div>

          {/* menu */}
          <div className="hidden md:flex gap-4">
            <li className="text-white capitalize">
              <a href="#about" className="hover:text-main-color">
                about
              </a>
            </li>
            <li className="text-white capitalize">
              <a href="#blogs" className="hover:text-main-color">
                blogs
              </a>
            </li>
            <li className="text-white capitalize">
              <a href="#contact" className="hover:text-main-color">
                contact
              </a>
            </li>
            <li className="text-white capitalize">
              <a href="#projects" className="hover:text-main-color">
                work
              </a>
            </li>
          </div>

          {/* hamburger  */}
          <div
            onClick={handleClick}
            className="z-20 text-white text-[18px] cursor-pointer hover:text-main-color md:hidden"
          >
            {!Nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* mobile menu */}
          <div
            className={
              !Nav
                ? "hidden"
                : "flex flex-col gap-4 absolute right-3 top-14 bg-zinc-900 px-4 py-2 rounded-md z-20"
            }
          >
            <li className="text-white capitalize hover:text-main-color"><a href="#about">about</a></li>
            <li className="text-white capitalize hover:text-main-color"><a href="#blogs">blogs</a></li>
            <li className="text-white capitalize hover:text-main-color"><a href="#contact">contact</a></li>
            <li className="text-white capitalize hover:text-main-color"><a href="#projects">work</a></li>
          </div>
        </div>
      </div>
    </nav>
  );
}
