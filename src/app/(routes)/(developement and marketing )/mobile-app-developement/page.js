import Mobileappdevlopement from "@/components/DevAndMarketing/mobileAppDevlopement";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Mobile App Development",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title="Mobile App Development" />
      <Mobileappdevlopement />
    </>
  );
}

export default page;
