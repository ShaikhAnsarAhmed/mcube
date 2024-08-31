"use client";
import React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimationYB from "@/motions/getScrollAnimationYB";
import ScrollAnimationWrapper from "@/motions/ScrollAnimationWrapper";

function CommonImageCard({ cardData, ...props }) {
  const scrollAnimationyb = useMemo(() => getScrollAnimationYB(), []);
  return (
    <div className="mt-5 sm:mt-0">
      <div {...props} className={``}>
        {cardData.map((item, i) => (
          <ScrollAnimationWrapper key={i}>
            <motion.div
              variants={scrollAnimationyb}
              custom={{ delay: i * 0.1 }}
              className="grid grid-cols-7 mb-7 items-start justify-center"
            >
              <div className="col-span-1 flex items-center justify-center text-2xl sm:text-3xl py-3 2xl:py-7 sm:m-3 px-0 rounded-full text-white bg-primary">
                {item.icon}
              </div>
              <div className="ml-3 col-span-6">
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-xl"> {item.desc}</p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default CommonImageCard;
