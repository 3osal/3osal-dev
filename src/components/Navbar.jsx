import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Navbar() {
  return (
    <nav className="h-1 py-3">
      <div className="container">
        <div className="data flex flex-col items-center justify-between sm:flex-row">
          <div className="logo relative">
            <a href="/" className=" text-paragraph-color text-3xl font-bold">
              <FontAwesomeIcon
                icon={faCode}
                className="text-main-color text-[23px]"
              />{" "}
              3osal
            </a>
          </div>
          <div className="links flex gap-4 ">
            <a
              href="/"
              className="text-paragraph-color capitalize text-[16px] hover:text-main-color"
            >
              home
            </a>
            <a
              href="#about"
              className="text-paragraph-color capitalize text-[16px] hover:text-main-color"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-paragraph-color capitalize text-[16px] hover:text-main-color"
            >
              project
            </a>
            <a
              href="#contact"
              className="text-paragraph-color capitalize text-[16px] hover:text-main-color"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
