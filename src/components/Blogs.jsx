import project from "../assets/image/blogs/project.png";
import finish from "../assets/image/blogs/finish.png";
import team from "../assets/image/blogs/team.png";

import { FaCalendar } from "react-icons/fa";
export default function Blogs() {
  return (
    <section id="blogs">
      <div className="container">
        <span className="main-title">our blogs</span>
        <div className="mt-16 grid grid-rows-1 lg:grid-cols-3 gap-5">
          <div className="card rounded-[7px]">
            <div className="image w-[100%]">
              <img src={finish} alt="device" className="rounded-[0px] " />
            </div>
            <div className="info py-2">
              <div className="data-time text-white mb-4 flex items-center gap-3">
                <span className="flex items-center gap-3">
                  <FaCalendar className="hover:text-main-color" />
                  4/7/2024
                </span>
                <span className="text-[14px] capitalize text-slate-600">
                  | admin
                </span>
              </div>
              <h2 className="capitalize text-[25px] font-bold">
                Learning Platforms
              </h2>
              <p className="text-[15px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis reprehenderit ducimus dolores veniam veritatis nihil?
                Illum ad magnam laboriosam numquam?
              </p>
            </div>
            <div className="btn bg-main-color px-[7px] py-[5px] rounded-md w-[max-content] block hover:bg-slate-800">
              <a href="/" className="text-white capitalize">
                read more
              </a>
            </div>
          </div>
          <div className="card rounded-[7px]">
            <div className="image w-[100%]">
              <img src={project} alt="device" className="rounded-[0px]" />
            </div>
            <div className="info py-2">
              <div className="data-time text-white mb-4 flex items-center gap-3">
                <span className="flex items-center gap-3">
                  <FaCalendar className="hover:text-main-color" />
                  4/7/2024
                </span>
                <span className="text-[14px] capitalize text-slate-600">
                  | admin
                </span>
              </div>
              <h2 className="capitalize text-[25px] font-bold">
                First Project
              </h2>
              <p className="text-[15px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis reprehenderit ducimus dolores veniam veritatis nihil?
                Illum ad magnam laboriosam numquam?
              </p>
            </div>
            <div className="btn bg-main-color px-[7px] py-[5px] rounded-md w-[max-content] block hover:bg-slate-800">
              <a href="/" className="text-white capitalize">
                read more
              </a>
            </div>
          </div>
          <div className="card rounded-[7px]">
            <div className="image w-[100%]">
              <img src={team} alt="device" className="rounded-[0px]" />
            </div>
            <div className="info py-2">
              <div className="data-time text-white mb-4 flex items-center gap-3">
                <span className="flex items-center gap-3">
                  <FaCalendar className="hover:text-main-color" />
                  4/7/2024
                </span>
                <span className="text-[14px] capitalize text-slate-600">
                  | admin
                </span>
              </div>
              <h2 className="capitalize text-[25px] font-bold">
                Project With Team
              </h2>
              <p className="text-[15px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis reprehenderit ducimus dolores veniam veritatis nihil?
                Illum ad magnam laboriosam numquam?
              </p>
            </div>
            <div className="btn bg-main-color px-[7px] py-[5px] rounded-md w-[max-content] block hover:bg-slate-800">
              <a href="/" className="text-white capitalize">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
