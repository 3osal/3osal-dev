import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me1 from "../assets/image/me1.png";
import {
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Landing() {
  return (
    <section className="landing">
      <div className="container relative">
        <div className="data flex flex-col md:flex-row items-center gap-7">
          <div className="info">
            <span className="w-[40px] h-[5px] bg-white block mb-2 sm:w-[60px] sm:mb-5"></span>
            <h1 className="text-[30px] font-bold w-[max-content] sm:text-[50px]">
              <FontAwesomeIcon icon={faDev} className="text-[20px]"/>
              I'm Essam Mohamed
            </h1>
            <p className="text-[15px] mt-3">
              My website programming expresses my deep passion, and it is
              evident in every programming step I take, <br /> to achieve the best
              possible experience for users.
            </p>
          </div>
          <div className="image w-[250px] sm:flex justify-center overflow-hidden md:w-[400px] bg-zinc-900 rounded-[50%] px-[35px]">
            <img src={me1} className="w-[300px] block" alt="me" />
          </div>
        </div>
        <div className="absolute bottom-10px left-20px flex gap-4 mt-3 sm:bottom-0px social">
          <a
            href="https://www.facebook.com/essam.abdelmaaboud"
            className=" text-white text-[18px] rounded-[50%] hover:text-main-color"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/_3osal/"
            className=" text-white text-[18px] rounded-[50%] hover:text-main-color"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/3osal"
            className=" text-white text-[18px] rounded-[50%] hover:text-main-color"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="/"
            className=" text-white text-[18px] rounded-[50%] hover:text-main-color"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}
