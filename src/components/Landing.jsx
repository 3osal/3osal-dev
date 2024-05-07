import me1 from "../assets/image/me1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";
export default function Landing() {
  return (
    <section className="mt-14">
      <div className="container relative">
        {/* data */}
        <div className=" flex flex-col md:flex-row items-center gap-7">
            {/* info */}
          <div>
            <span className="w-[40px] h-[5px] bg-white block mb-2 sm:w-[60px] sm:mb-5"></span>
            <h1 className="text-[30px] font-bold w-[max-content] sm:text-[50px]">
              <FaDev className="text-[20px]" />
              I'm Essam Mohamed
            </h1>
            <p className="text-[15px] mt-3">
              My website programming expresses my deep passion, and it is
              evident in every programming step I take, <br /> to achieve the
              best possible experience for users.
            </p>
          </div>
          {/* image */}
          <div className=" hidden lg:flex justify-center overflow-hidden md:w-[400px] bg-zinc-900 rounded-[50%] px-[35px]">
            <img src={me1} className="w-[400px] block" alt="me" />
          </div>
        </div>
        {/* social icons */}
        <div className="left-20px flex gap-4 sm:bottom-0px">
          <a
            href="https://www.facebook.com/essam.abdelmaaboud"
            className=" text-white text-[20px] rounded-[50%] hover:text-main-color"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/_3osal/"
            className=" text-white text-[20px] rounded-[50%] hover:text-main-color"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/3osal"
            className=" text-white text-[20px] rounded-[50%] hover:text-main-color"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            className=" text-white text-[20px] rounded-[50%] hover:text-main-color"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
