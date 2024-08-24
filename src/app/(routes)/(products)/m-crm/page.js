import CommonCard from "@/components/global/commonCard";
import Heading from "@/components/global/Heading";
import LandinBannaer from "@/components/global/landingBanner";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { mCrm } from "@/constant/cardData";
import React from "react";

export const metadata = {
  title: "MCube Customer Relationship Management (CRM)",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function ERPschools() {
  return (
    <div>
      <LandinBannaer title="M-CRM" />
      <div className="py-10">
        <div className="custom-container ">
          <Heading title="Empowering Customer Relationships" />
          <p className=" py-4">
            {" "}
            You can define Customer Relationship Management (CRM) in many ways,
            depending on what an individual intends to do. For others, it is
            their plan for how to qualify potential clients or customers when
            determining what business will be conducted with them. For others it
            is a system that:• Assists in capturing all the information they
            need to get 360-degree view of customer interests and preferences.
            Offers multiple menu iterations for processing sales and marketing
            communications, customer-facing interactions/offers.
          </p>
          <div className="py-5">
            <SubHeadingLeft title="Key Features" />
          </div>
          <div className="py-10">
            <CommonCard cardData={mCrm} gridData="sm:grid-cols-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPschools;
