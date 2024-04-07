import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me2 from "../assets/image/IMG_20231225_213810_178.png";
import {
  faCalendar,
  faEnvelope,
  faGlobe,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faCss3, faHtml5, faLinkedin, faNodeJs, faPhp, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="main-title">about me</span>
        <div className="data mt-16 flex gap-[25px] items-start">
          <div className="image hidden lg:block w-[400px] bg-zinc-900 pt-[10px] px-[26px] rounded-[7px]">
            <img src={me2} alt="me" className=" hidden md:block" />
          </div>
          <div className="info">
            <h1 className="text-2xl capitalize font-bold mb-6 relative before:content-[''] before:absolute before:-bottom-5 before:left-0 before:w-[40px] before:h-[5px] before:bg-main-color">
              all about me
            </h1>
            <p className="capitalize w-[350px] sm:w-[600px]">
              my name is essam mohamed abdel-maaboud and i am a deticated front
              end develeper based in alexandria-egypt.
            </p>
            <div className="kills mt-5 w-[350px] sm:w-[max-content]">
            <h1 className="capitalize text-[20px] font-bold">skills</h1>
            <div className="skills-data flex flex-wrap gap-4">
              <FontAwesomeIcon icon={faHtml5} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faCss3} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faJs} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faBootstrap} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faPhp} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faSass} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faReact} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
              <FontAwesomeIcon icon={faNodeJs} className="text-[25px] text-white p-[10px] bg-black rounded-[50px] hover:bg-slate-800"/>
            </div>
            </div>
            <p className="capitalize mt-14 w-[350px] md:w-[400px]">
              You can’t laugh at the same joke over and over So why are you
              always crying about the same problem?
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-[30px]">
              <div className="left flex flex-col gap-2">
                <li>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Date of birth :</b> <span className="">22 feb 2006</span>
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Nationality :</b> <span>Egypt</span>
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Address :</b> <span className="">Alex, Egypt</span>
                  </span>
                </li>
              </div>
              <div className="right flex flex-col gap-2">
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Phone :</b> <span>+20 1068446885</span>
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Email :</b>{" "}
                    <span>essammohamedabdelmaaboud22@gmail.com</span>
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-main-color mr-2"
                  />
                  <span className="text-text-color">
                    <b>Linkedin :</b> <span>Essam Abdel Maaboud</span>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
