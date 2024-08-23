import React from "react";

import Managesservices from "@/components/ERP/managedServices";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "MANAGED SERVICES",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};
function page() {
  return (
    <>
      <LandinBannaer title="Managed Services" />
      <Managesservices />
    </>
  );
}

export default page;
