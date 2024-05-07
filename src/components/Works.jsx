export default function Works() {
    return (
      <section id="projects" className="bg-zinc-900 py-10 mb-14">
        <div className="container">
          <div className="data flex flex-col md:flex-row justify-between items-center">
            <div className="left">
              <h1 className="text-[35px] font-bold capitalize">Take a look at my projects</h1>
              <p className="text-[15px]">
                My mission is to achieve development and success in all my
                projects, in  order to serve  <br />society and achieve leadership in
                every field in which I work.
              </p>
            </div>
            <div className="right text-white font-bold capitalize bg-main-color w-[max-content] rounded-[5px] cursor-pointer hover:bg-slate-800 py-[15px] px-[30px] md:py-[30px]px-[60px]">
              <a href="https://github.com/3osal">here me</a>
            </div>
          </div>
        </div>
      </section>
    );
  }