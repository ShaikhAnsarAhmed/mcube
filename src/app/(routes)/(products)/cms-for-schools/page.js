import CommonCard from "@/components/global/commonCard";
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
          <p className="md:text-xl py-4">
            {" "}
            Moksha Solution is the place to look for a state-of-the-art College
            Management System that makes the entire complex process of any
            educational institution automated and orderly. Our CMS is a
            comprehensive, integrated solution built on robust academic
            foundations with advanced technologies that provide the highest
            value for colleges and universities.
          </p>
          <div className="py-10">
            <SubHeadingLeft title="Key Features" />
          </div>
          <div className="py-10">
            <CommonCard
              cardData={CMSsoftwareData}
              gridData="sm:grid-cols-2"
              descClassName="sm:h-48 h-32 2xl:h-32"
              titleClassName="h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPschools;
