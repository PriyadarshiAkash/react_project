import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="justify-center flex-wrap">
        <div className="md:h-auto">
          <div>
            <h1 className="text-[60px] text-center font-bold">
              What Can we help you with?
            </h1>
          </div>
          <div className="text-center w-auto mt-3">
            <input
              className="m-3 w-[710px] rounded-3xl p-3 border-2 border-white-400 md:h-auto hover:border-blue-400"
              type="text"
              placeholder="Search our articles"
            ></input>
          </div>

          <div className="flex justify-center mt-9">
            <div className="">
              <div className="flex p-3 justify-center gap-2 mr-[180px]">
                <img
                  className="h-8 w-8 "
                  src="https://th.bing.com/th/id/OIP.22u2MmhQXWtGhae4NlKj8wHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">
                  Setting up your first event
                </h1>
              </div>

              <div className="flex p-3 justify-center gap-2 mr-[125px]">
                <img
                  className="h-8 w-8 "
                  src="https://cdn0.iconfinder.com/data/icons/contact-us-butterscotch-series/256/Schedule-1024.png"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">
                  Schedule with video conferencing
                </h1>
              </div>

              <div className="flex p-3 justify-center gap-2 mr-[150px]">
                <img
                  className="h-7 w-7"
                  src="https://th.bing.com/th/id/OIP.2yCk7wp8QNHjPocEi1BK8AHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">
                  Automate task with Workflows
                </h1>
              </div>
            </div>

            <div>
              <div className="flex p-3 justify-center gap-2">
                <img
                  className="h-8 w-8"
                  src="https://th.bing.com/th/id/OIP.NPYwDnc0-8VMqlfUpchdBwHaHO?pid=ImgDet&w=474&h=462&rs=1"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">
                  Troubleshooting availibility
                </h1>
              </div>

              <div className="flex p-3 justify-center gap-2 mr-4">
                <img
                  className="h-8 w-8"
                  src="https://th.bing.com/th/id/OIP.KqyOdTy4tnQfQ_d7OpoZBwHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">Embed options overview</h1>
              </div>

              <div className="flex p-3 justify-center gap-2 ml-1">
                <img
                  className="h-8 w-8"
                  src="https://th.bing.com/th/id/OIP.ykCipRu_Foc8Q7et5HsbCwHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <h1 className="text-sky-700 text-lg">
                  Using Calendly for Chrome
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
