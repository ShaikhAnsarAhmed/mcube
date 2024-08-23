import Reporting from "@/components/ERP/reporting";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Reporting",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title="REPORTING" />
      <Reporting />
    </>
  );
}

export default page;
