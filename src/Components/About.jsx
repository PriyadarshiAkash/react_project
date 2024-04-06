import React from "react";

const About = ({About, Option1, Option2, Option3, Option4, Option5}) => {
  return (
    <div>
      <div className="grid gap-3">
        <div className="w-[150px]">
          <h1 className="text-lg font-bold text-blue-900">{About}</h1>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-blue-900">{Option1}</p>
          <p className="text-sm text-blue-900">{Option2}</p>
          <p className="text-sm text-blue-900">{Option3}</p>
          <p className="text-sm text-blue-900">{Option4}</p>
          <p className="text-sm text-blue-900">{Option5}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
