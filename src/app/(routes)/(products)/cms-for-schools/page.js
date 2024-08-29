import CommonCard from "@/components/global/commonCard";
import CommonFeatures from "@/components/global/commonFeatures";
import Heading from "@/components/global/Heading";
import LandinBannaer from "@/components/global/landingBanner";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { CMSsoftwareData } from "@/constant/cardData";
import React from "react";

export const metadata = {
  title: "CMS For Schools and Collages",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function ERPschools() {
  return (
    <div>
      <LandinBannaer title="CMS For Schools and Collages " />
      <div className="py-10">
        <div className="custom-container ">
          <Heading title="Seamless Education Management" />
          <p className="md:text-xl py-4">
            {" "}
            Moksha Solution is the place to look for a state-of-the-art College
            Management System that makes the entire complex process of any
            educational institution automated and orderly. Our CMS is a
            comprehensive, integrated solution built on robust academic
            foundations with advanced technologies that provide the highest
            value for colleges and universities.
          </p>
          <div className="pt-10">
            <SubHeadingLeft title="Key Features" />
          </div>
          {/* <div className="py-10">
            <CommonCard
              cardData={CMSsoftwareData}
              gridData="sm:grid-cols-2 2xl:grid-cols-4"
              descClassName="sm:h-48 h-56 2xl:h-72"
              titleClassName="h-24 sm:h-20 2xl:h-24"
            />
          </div> */}

          <div className="py-10 ">
            <CommonFeatures
              cardData={CMSsoftwareData}
              gridData="sm:grid-cols-2 "
            />
            {/* <div className="grid  grid-cols-1 sm:grid-cols-2 justify-start   items-center ">
              {CMSsoftwareData.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-10 items-start px-5 py-5 group "
                >
                  <div className="bg-[#eee] group-hover:bg-primary  flex items-center rounded-full p-2.5 col-span-1">
                    {item.icon}
                  </div>
                  <div className="ml-3 col-span-9">
                    <h3 className="font-semibold  uppercase text-left text-xl">
                      {item.title}
                    </h3>
                    <p className=" text-base mt-2 text-justify">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPschools;
