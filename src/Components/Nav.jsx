import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between mx-20 ">
          <div className="flex gap-6">
            <div className="">
              <img
                className="h-10 w-25 mt-1"
                src="https://i0.wp.com/www.archerinsgroup.com/wp-content/uploads/2022/02/calendly-logo.png?w=1200&ssl=1"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h1 className="font-semibold">Help Center</h1>
            </div>
          </div>

          <div className="flex gap-10 mt-3">
            <div className="flex gap-8 cursor-pointe">
              <h1 className="cursor-pointer">Developers</h1>
              <h1 className="cursor-pointer">Report Abuse</h1>
              <h1 className="cursor-pointer">Contact Us</h1>
            </div>

            <div className="flex gap-5 mb-6">
              <button className="">Log in </button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
