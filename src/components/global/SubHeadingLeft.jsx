import { FadeUpStagger } from "@/motions/FadeUp";
import React from "react";

function SubHeadingLeft({ title, text }) {
  return (
    <div>
      <FadeUpStagger
        title={title}
        className={`z-40 border-l-[4px] border-solid text-primary border-logored  pl-2 text-xl sm:text-2xl 2xl:text-3xl font-semibold ${
          text ? text : "text-black border-black"
        }  text-left py-0 mt-0 sm:mt-0 lg:py-0 2xl:py-0`}
      />

      {/* <h3
        className={`z-40 border-l-8 border-solid  pl-2 text-xl sm:text-2xl 2xl:text-3xl font-semibold ${
          text ? text : "text-black border-black"
        }  text-left py-0 mt-0 sm:mt-0 lg:py-0 2xl:py-0`}
      >
        {title}
      </h3> */}
    </div>
  );
}

export default SubHeadingLeft;
