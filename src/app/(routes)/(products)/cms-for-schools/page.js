import CommonCard from "@/components/global/commonCard";
import LandinBannaer from "@/components/global/landingBanner";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { CMSsoftwareData } from "@/constant/cardData";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://mcube.consulting/"),
  title: "CMS For Schools and Collages",
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
      <LandinBannaer title="CMS For Schools and Collages " />
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
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
              descClassName="sm:h-32 h-32 2xl:h-24"
              titleClassName="h-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPschools;
