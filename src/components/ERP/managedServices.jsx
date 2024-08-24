import React from "react";
import CommonCard from "@/components/global/commonCard";
import {
  ManagedServicesData,
  ManagedServicesStepsData,
} from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Managesservices() {
  return (
    <div>
      {" "}
      <div>
        <div className="py-10">
          <div className="custom-container ">
            <p className="md:text-xl py-4">
              Managed Services at MCube Consulting refers to outsourcing the
              responsibility for maintaining and managing your Oracle ERP
              applications, and services of a company to us as a third-party
              Managed Service Provider (MSP). Here&apos;s an overview of the
              principles and approach of our Managed Services competency :
            </p>
            <div className="py-10">
              <CommonCard
                cardData={ManagedServicesData}
                gridData="sm:grid-cols-1"
                titleClassNam="pb-3"
                listClassName="h-[400px] sm:h-[200px] 2xl:h-[150px]"
              />
            </div>
            <div className="py-10">
              <SubHeadingLeft
                title="The approach to Managed Services typically involves the following
              steps:"
              />
            </div>
            <div className="py-10">
              <CommonCard
                cardData={ManagedServicesStepsData}
                gridData="sm:grid-cols-2 2xl:grid-cols-2"
                titleClassNam="pb-3"
                descClassName="h-[180px] sm:h-[100px] 2xl:h-[90px]"
              />
              <p className="md:text-xl py-4">
                Overall, the principles and approach of Managed Services at
                MCube are designed to provide a flexible and scalable IT support
                model that delivers high-quality services and helps businesses
                optimize their IT environment while reducing costs and improving
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Managesservices;
