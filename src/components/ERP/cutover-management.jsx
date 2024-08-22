import React from "react";
import CommonCard from "@/components/global/commonCard";
import { CutoverManagementData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Cutovermanagement() {
  return (
    <div>
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <p className="md:text-xl py-4">
            Cutover management is a critical aspect of any Oracle ERP
            implementation project. It involves the coordination and execution
            of activities to transition from the old system to the new system,
            ensuring that all business processes and data are transferred
          </p>
          <p className="md:text-xl py-4">
            Here are the key steps involved in Oracle ERP cutover management at
            MCube
          </p>
          <div className="pt-10">
            <CommonCard
              cardData={CutoverManagementData}
              gridData="sm:grid-cols-3"
              descClassName="sm:h-56 h-56 2xl:h-40"
            />
          </div>
          <p className="md:text-xl">
            Cutover management requires careful planning, coordination, and
            execution to ensure a smooth transition from the old system to the
            new system. By following a structured approach to cutover
            management, we can minimize disruption to the business and ensure
            that the new system meets the business requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cutovermanagement;
