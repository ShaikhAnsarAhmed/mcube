"use client";
import React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimationYB from "@/motions/getScrollAnimationYB";
import ScrollAnimationWrapper from "@/motions/ScrollAnimationWrapper";

function CommonFeatures({ cardData, className = "", gridData, ...props }) {
  const scrollAnimationyb = useMemo(() => getScrollAnimationYB(), []);
  return (
    <div>
      <div
        {...props}
        className={`grid grid-cols-1 justify-start   items-cente  ${className} ${gridData}`}
      >
        {cardData.map((item, i) => (
          <ScrollAnimationWrapper key={i}>
            <motion.div
              variants={scrollAnimationyb}
              custom={{ delay: i * 0.1 }}
              className="grid grid-cols-10 items-start  sm:px-5 py-5 group mb-5"
            >
              <div className="bg-[#eee] 2xl:mx-3 text-logored group-hover:text-white group-hover:bg-primary  flex justify-center items-center rounded-full p-1 sm:p-2.5 2xl:p-1 col-span-1">
                {item.icon}
              </div>
              <div className="ml-3 col-span-9">
                <h3 className="font-semibold  uppercase text-left text-xl">
                  {item.title}
                </h3>
                <p className=" text-base mt-2 text-justify">{item.desc}</p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default CommonFeatures;
