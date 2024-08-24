import React from "react";
import Heading from "@/components/global/Heading";
import SubHeadingLeft from "@/components/global/SubHeadingLeft.jsx";
import SubHeadingRight from "@/components/global/SubHeadingRight.jsx";
import Image from "next/image";
import CommonCard from "@/components/global/commonCard";
import { TiArrowRight } from "react-icons/ti";
import { serviceData } from "@/constant/cardData";
import "@/utills/tailwind-custom.css";
import Link from "next/link";
function Shortabout() {
  return (
    <>
      <div className="pt-20  sm:pt-0  2xl:pt-0">
        <div className="custom-container">
          <Heading title="About Us" />
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:py-5 sm:pt-5">
            <SubHeadingLeft title="We Believe in Resource Efficiency" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-x-10 py-5 ">
            <div className=" order-first sm:order-last">
              <Image
                src="/images/second.jpg"
                alt="pic"
                loading="lazy"
                width={500}
                height={500}
                className=" rounded-lg h-full sm:h-[300px] 2xl:h-full 2xl:w-full sm:w-[450px] w-full "
              />
            </div>
            <div className="text-justify ">
              <p className=" pt-4 sm:pt-0 pb-4 md:text-xl ">
                MCube is a leading digital services and consulting company
                headquartered in the UAE. We empower our clients across the
                globe to steer their digital transformation journey. Our
                approach is to understand your requirements and then come up
                with solutions that best suit your needs. We specialize in
                Oracle ERP implementations and have an affiliate company that
                masters Web Development, and Digital Marketing that brings to
                market some revolutionary products like the Mobile Attendance
                system which helps companies track the attendance of a diversely
                spread workforce.
              </p>
              <div className="font-medium group flex items-center ">
                <Link
                  href="/About-us"
                  className="md:text-xl flex text-white bg-[#004368]  px-3 py-1 shadow drop-shadow items-center  "
                >
                  Learn More
                  <div className="">
                    <TiArrowRight className="group-hover:translate-x-1 group-hover:transition-transform group-hover:duration-150 group-hover:ease-in  font-medium" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-10 sm:py-20">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-x-10 ">
              <div>
                <Image
                  src="/images/city.jpg"
                  alt="pic"
                  loading="lazy"
                  width={400}
                  height={400}
                  className=" rounded-lg h-full w-full "
                />
              </div>
              <div>
                <div className="py-5 sm:py-10">
                  <SubHeadingLeft title="Transform your Tomorrow" />
                  <p className="py-4 md:text-xl">
                    All businesses are striving hard to stay competitive. It may
                    seem all too complicated to walk over that transformative
                    bridge, but this is where we come in. We assist to give you
                    minimal business disruption.
                  </p>
                </div>
                <div>
                  <SubHeadingLeft title="Lift, Shift and Solve" />
                  <p className="py-4 md:text-xl">
                    With a focus on your operational needs, we prepare a
                    strategic, well-defined methodology to guide all our
                    processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" hidden sm:grid grid-cols-1 sm:grid-cols-4 2xl:grid-cols-3 justify-center ">
            <div className="">
              <SubHeadingRight title="Transform your Tomorrow" />
              <p className="py-4  md:text-xl">
                All businesses are striving hard to stay competitive. It may
                seem all too complicated to walk over that transformative
                bridge, but this is where we come in. We assist to give you
                minimal business disruption.
              </p>
            </div>
            <div className="sm:col-span-2 2xl:col-span-1">
              <Image
                src="/images/home-02.png"
                alt="pic"
                loading="lazy"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div>
              <div className=" ">
                <SubHeadingLeft title="Lift, Shift and Solve" />
                <p className="py-4   md:text-xl">
                  With a focus on your operational needs, we prepare a
                  strategic, well-defined methodology to guide all our
                  processes.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-[#eee]">
        <div className="custom-container py-0 sm:py-10">
          <div className="pt-5 sm:pt-10">
            <Heading title="SERVICES" />
            <CommonCard
              gridData="py-10 sm:grid-cols-3 2xl:grid-cols-4"
              cardData={serviceData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shortabout;
