import React from "react";
import CommonCard from "@/components/global/commonCard";
import { UpgradesData, UpgradsDataTwo } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Upgrades() {
  return (
    <div>
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <p className="md:text-xl py-4">
            {" "}
            Upgrading from EBS (Oracle E-Business Suite) to Oracle Cloud ERP
            involves several steps and considerations.
          </p>
          <div className="py-10">
            <SubHeadingLeft
              title="An overview of
            the process and The key factors"
            />
          </div>
          <div className=" py-10">
            <CommonCard
              cardData={UpgradesData}
              gridData="sm:grid-cols-1"
              titleClassNam="pb-0"
              listClassName="h-[380px] sm:h-[120px] 2xl:h-[150px]"
            />
          </div>
          <div className="py-4">
            <div className="md:text-xl ">
              Some of the key Priciples to consider when upgrading from EBS to
              Oracle Cloud ERP include:
            </div>

            <p className="md:text-xl py-4">
              Upgrading from EBS to Oracle Cloud ERP requires careful planning,
              execution, and testing to ensure a successful transition and
              minimize disruption to the business. With the right approach and
              expertise, however, businesses can realize significant benefits
              from moving to Oracle Cloud ERP, including improved functionality,
              scalability, and agility.
            </p>
          </div>
          <div className="py-10">
            <CommonCard
              cardData={UpgradsDataTwo}
              gridData="sm:grid-cols-3"
              descClassName="sm:h-36 h-36 2xl:h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrades;
