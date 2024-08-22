import React from "react";

function SubHeadingRight({ title }) {
  return (
    <div>
      <h3 className=" z-40 border-r-8 border-solid border-black pr-2  text-2xl sm:text-2xl 2xl:text-3xl  font-semibold text-black text-right py-0 mt-3 sm:mt-0 lg:py-0 2xl:py-0">
        {title}
      </h3>
    </div>
  );
}

export default SubHeadingRight;
