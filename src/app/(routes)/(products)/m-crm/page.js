import CommonCard from "@/components/global/commonCard";
import LandinBannaer from "@/components/global/landingBanner";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { mCrm } from "@/constant/cardData";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://mcube.consulting/"),
  title: "MCube Customer Relationship Management (CRM)",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",

  openGraph: {
    title: "MCube is a leading Digital Services and Consulting Company.",
    description:
      "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
    url: "https://mcube.consulting",
    siteName: "MCUBE CONSULTING",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
        // secureUrl:
        //   "https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Preview image for Mcube Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "MCUBE CONSULTING",
    title: "MCube is a leading Digital Services and Consulting Company.",
    description:
      "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
    creator: "MCUBE CONSULTING",
    images: {
      url: "/twitter-image.jpeg",
      alt: "Preview image for Mcube Consulting",
    },
  },
};

function ERPschools() {
  return (
    <div>
      <LandinBannaer title="M-CRM" />
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
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
