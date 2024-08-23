import Cutovermanagement from "@/components/ERP/cutover-management";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Cutover Management",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title="Cutover Management" />
      <Cutovermanagement />
    </>
  );
}

export default page;
