"use client";
import { FadeUpStagger } from "@/motions/FadeUp";
import React from "react";

function Heading({ title }) {
  return (
    <div>
      <FadeUpStagger
        title={title}
        className="text-center sec-title uppercase text-[#004368]  text-base lg:text-3xl 2xl:text-4xl font-semibold"
      />
      {/* <h3 className=" text-center sec-title uppercase text-[#004368]  text-base lg:text-3xl 2xl:text-4xl font-semibold">
        {title}
      </h3> */}
    </div>
  );
}

export default Heading;
