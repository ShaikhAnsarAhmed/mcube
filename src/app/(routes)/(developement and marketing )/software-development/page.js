import React from "react";
import Softwaredevelopement from "@/components/DevAndMarketing/softwareDevelopement";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "Software Development",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      {" "}
      <LandinBannaer title="Software Development" />
      <Softwaredevelopement />
    </>
  );
}

export default page;
