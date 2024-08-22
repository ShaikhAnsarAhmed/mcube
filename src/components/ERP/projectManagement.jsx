import React from "react";

import CommonCard from "@/components/global/commonCard";
import { projectManagementData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Projectmanagement() {
  return (
    <div>
      <div>
        <div className="py-10">
          <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
            <p className="md:text-xl py-4">
              Mcube&apos;s project management methodology and approach refer to
              the set of processes, tools, and techniques used to manage
              projects effectively.
            </p>
            <div className="py-5">
              <SubHeadingLeft title="Typical project management methodology and approach Include:" />
            </div>
            <div className="py-10 ">
              <CommonCard
                cardData={projectManagementData}
                className=""
                listClassName="h-[400px] sm:h-[200px]"
                titleClassName="pb-3"
                gridData="sm:grid-cols-1"
              />
            </div>
            <p className="md:text-xl ">
              We at MCube Consulting may also use project management tools and
              software to support its methodology and approach. These may
              include project management software such as Microsoft Project or
              Trello, risk management tools such as Risk Register, and
              collaboration tools such as Microsoft Teams or Slack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectmanagement;
