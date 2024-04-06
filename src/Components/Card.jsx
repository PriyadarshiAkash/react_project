import React from "react";

const Card = ({ CardHeading, CardFont, CardImage }) => {
  return (
    <div className="">
      <div className=" h-[220px] w-[330px] rounded-2xl grid mt-7 border-2 justify-center hover:border-blue-400">
        <div className="h-auto w-auto mx-6 ">
          <div className="bg-pink-300 h-[90px] w-[90px] rounded-full mt-3 mx-[128px]">
            <div className="pt-4">
              <img
                className="h-[60px] w-[60px] mx-4 rounded-sm"
                src={CardImage}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mx-6 mb-">
          <div className=" mx-[90px] w-[160px]">
            <h1 className="text-black font-bold text-center">{CardHeading}</h1>
          </div>

          <div className="text-center h-[72px] w-[290px] mx-auto">
            <p className="text-center text-sm">{CardFont}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
