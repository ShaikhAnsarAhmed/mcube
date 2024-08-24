import React from "react";

import CommonCard from "@/components/global/commonCard";
import { projectManagementData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Projectmanagement() {
  return (
    <div>
      <div>
        <div className="py-10">
          <div className="custom-container ">
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
                listClassName="h-[400px] sm:h-[200px] 2xl:h-[300px]"
                titleClassName="pb-3"
                gridData="sm:grid-cols-1 2xl:grid-cols-3"
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
