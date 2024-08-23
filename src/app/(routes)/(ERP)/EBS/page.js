import React from "react";
import Ebs from "@/components/ERP/ebs";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "Oracle eBusiness Suite",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};
function page() {
  return (
    <>
      <LandinBannaer title="Oracle eBusiness Suite" />
      <Ebs />
    </>
  );
}

export default page;
