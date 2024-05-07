import React, { useEffect, useState } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";

export default function ButtonUp() {
  const [BtnTop, setBtnTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBtnTop(true);
      } else {
        setBtnTop(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <>
  {BtnTop && <button onClick={scrollUp} className=" text-white  text-[25px] hover:bg-zinc-900 fixed bottom-5 right-5 p-3 rounded-[50px]">
    <AiOutlineCaretUp />
    </button>
    }
  </>;
}
