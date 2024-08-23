import Websitedesign from "@/components/DevAndMarketing/webdesignanddevelopement";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Website Design And Development",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title="WEBSITE DESIGN & DEVELOPMENT" />
      <Websitedesign />
    </>
  );
}

export default page;
