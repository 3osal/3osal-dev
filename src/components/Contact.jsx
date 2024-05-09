import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact">
        <div className="container">
        <span className="main-title">quick contact</span>
            <div className="data mt-16 grid grid-rows-1 lg:grid-cols-2 gap-10 items-start">
                <div className="left flex flex-col gap-5">
                    <div className="card flex gap-3 items-center bg-black w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-gray-800">
                        <FaEnvelope className="text-[30px] text-main-color" />
                        <span className="block text-white">essammohamedabdelmaaboud22</span>
                    </div>
                    <div className="card flex gap-3 items-center bg-black w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-gray-800">
                        <FaPhoneAlt className="text-[30px] text-main-color" /> 
                        <span className="block text-white">+20 101868446885</span>
                    </div>
                    <div className="card flex gap-3 items-center bg-black w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-gray-800">
                        <FaLocationDot className="text-[30px] text-main-color" />
                        <span className="block text-white">AlAlexandria, Egypt</span>
                    </div>
                </div>
                <div className="right">
                    <form action="/" className="bg-black p-[20px] rounded-[10px] flex flex-col gap-5">
                        <div>
                            <input type="text" placeholder="Name" className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"  />
                        </div>
                        <div className="flex gap-4">
                        <input type="email" placeholder="Email" className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"  />
                            <input type="text" placeholder="Phone" className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"  />
                        </div>
                        <div>
                            <textarea name="des" placeholder="Message" className="w-[100%] bg-neutral-800 text-main-color p-3 outline-0 rounded-[10px]"></textarea>
                        </div>
                        <button className="text-white bg-main-color text-center capitalize px-[30px] py-[10px] w-[max-content] rounded-[15px] hover:bg-gray-800">send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
