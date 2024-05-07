import React, { useEffect, useState } from "react";

export default function QuickContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [Contact, setContact] = useState(false);

  const showConnect = () => {
    setContact(!Contact);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isVisible && (
        <div onClick={showConnect} className="head">
          <div className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
        </div>
      )}
      <form action="/" className={!Contact ? "hidden" : " fixed right-11 bottom-[150px] flex flex-col gap-3 w-max bg-zinc-900 p-[20px] rounded-md"}>
          <h1 className="text-2xl text-white capitalize font-bold">contact us</h1>
          <input type="text" placeholder="Your email" className="bg-zinc-800 text-white outline-0 border border-zinc-600 py-[8px] px-[14px] rounded-[8px]" />
          <textarea  placeholder="Your message" className="bg-zinc-800 text-white outline-0 border border-zinc-600 py-[8px] px-[14px]"></textarea>
          <button className="p-3 outline-0 bg-main-color rounded-md text-white capitalize hover:bg-zinc-950">submit</button>
      </form>
    </>
  );
}
