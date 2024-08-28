"use client";
import React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimationYB from "@/motions/getScrollAnimationYB";
import ScrollAnimationWrapper from "@/motions/ScrollAnimationWrapper";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

function CommonFeatures({
  cardData,
  className = "",
  titleClassName = "",
  descClassName = "",
  listClassName = "",
  gridData,
  ...props
}) {
  const scrollAnimationyb = useMemo(() => getScrollAnimationYB(), []);
  return (
    <div>
      <div
        {...props}
        className={`grid grid-cols-1  gap-x-5 gap-y-5 ${className} ${gridData}`}
      >
        {cardData.map((item, i) => (
          <ScrollAnimationWrapper key={i}>
            <motion.div
              variants={scrollAnimationyb}
              custom={{ delay: i * 0.1 }}
              className="group z-[1] border-2 mb-10 border-primary/20 ease-out duration-500 hover:border-primary rounded-md relative bg-white"
            >
              <div className="text-red-600 absolute shadow-md -top-7 left-4 rounded-full p-3 bg-white border-2 border-[#eee] ease-out duration-500 group-hover:text-white group-hover:bg-primary">
                {item.icon}
              </div>

              <h3
                className={`${titleClassName} text-primary text-left px-5 pb-7 pt-10 text-lg  font-semibold`}
              >
                {item.title}
              </h3>

              {item.desc ? (
                <div className={`${descClassName}`}>
                  <p className="pb-5 px-5 text-left">{item.desc}</p>
                </div>
              ) : null}
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default CommonFeatures;
