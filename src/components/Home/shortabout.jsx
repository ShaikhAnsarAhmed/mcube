import React from "react";
import Heading from "@/components/global/Heading";
import SubHeadingLeft from "@/components/global/SubHeadingLeft.jsx";
// import SubHeadingRight from "@/components/global/SubHeadingRight.jsx";
import Image from "next/image";
import CommonCard from "@/components/global/commonCard";
import { TiArrowRight } from "react-icons/ti";
import { partnersData, serviceData } from "@/constant/cardData";
import "@/utills/tailwind-custom.css";
import Link from "next/link";
function Shortabout() {
  return (
    <>
      <div className="pt-20  sm:pt-0  2xl:pt-0">
        <div className="custom-container">
          <div className="mb-5">
            <Heading title="About Us" />
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 sm:py-5 sm:pt-5">
            <SubHeadingLeft title="We Believe in Resource Efficiency" />
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-x-10 2xl:gap-x-16 py-0 ">
            <div className=" order-first sm:order-last">
              <Image
                src="/images/second.png"
                alt="pic"
                loading="lazy"
                width={500}
                height={500}
                className=" rounded-lg h-full sm:h-[300px] 2xl:h-[300px] 2xl:w-full sm:w-[450px] w-full "
              />
            </div>
            <div className="text-justify ">
              <p className=" pt-4 sm:pt-0 pb-4 md:text-xl ">
                MCube Consulting is a leading IT business consulting firm,
                dedicated to empowering companies on their digital
                transformation journeys. Since our inception in 2014, we have
                been committed to delivering tailored solutions that drive
                business growth, enhance efficiency, and foster long-term
                success. With offices in the UK and Dubai Silicon Oasis, and a
                strategic partnership with India's technology powerhouse,
                Moksha, we are well-positioned to serve a global clientele.
              </p>
              <div className="font-medium group flex items-center mt-2">
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
            <div className="grid grid-col-1 lg:grid-cols-2 gap-x-10 2xl:gap-x-16 ">
              <div>
                <Image
                  src="/images/city.jpg"
                  alt="pic"
                  loading="lazy"
                  width={400}
                  height={400}
                  className=" rounded-lg h-full w-full 2xl:h-[350px] "
                />
              </div>
              <div>
                <div className="py-5 sm:py-10">
                  <SubHeadingLeft title="Transform your Tomorrow" />
                  <p className="py-4 md:text-xl text-justify">
                    All businesses are striving hard to stay competitive. It may
                    seem all too complicated to walk over that transformative
                    bridge, but this is where we come in. We assist to give you
                    minimal business disruption.
                  </p>
                </div>
                <div>
                  <SubHeadingLeft title="Elevate, Streamline and Conquer" />
                  <p className="py-4 md:text-xl text-justify">
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

      {/* NEW PARTNERSHIPS SECTION */}
      <div className=" bg-[#eee]">
        <div className="custom-container py-10 sm:py-16">
          <div className="mb-6 text-center">
            <Heading title="New Partnerships" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-10 pb-5">
            {partnersData.map((partner) => (
              <div className="border-2 border-primary/20 ease-out duration-500 hover:border-primary rounded-lg">
                <div
                  key={partner.title}
                  className="group bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-red-600  shadow-md -top-7 left-4 rounded-full p-3 bg-white border-2 border-[#eee] ease-out duration-500 group-hover:text-white group-hover:bg-primary">
                        {partner.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-[#004368]">
                        {partner.title}
                      </h3>
                    </div>
                    <p className="text-justify text-sm md:text-base text-gray-700">
                      {partner.desc}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={partner.linkSrc}
                      className="inline-flex items-center text-sm md:text-base font-medium text-[#004368]"
                    >
                      Learn More
                      <TiArrowRight className="ml-1 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* END NEW PARTNERSHIPS SECTION */}

      <div>
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
