import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ButtonUp() {
  const [backToTopButton, setbackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  });
// Scroll up function
  const scrollUp = ()=> {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
  }
  return <>
  {backToTopButton && (
        <div onClick={scrollUp} className="fixed bottom-[10px] right-[15px] w-[50px] h-[50px] text-center bg-main-color p-[15px] rounded-[50%] cursor-pointer hover:bg-slate-800">
        <FontAwesomeIcon icon={faCaretUp} className="text-white text-[23px]" />
      </div>
  )}
  </>;
}
