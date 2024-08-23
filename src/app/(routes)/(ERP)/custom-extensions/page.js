import Customextention from "@/components/ERP/custom-extensions";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: " Custom Extensions And Integrations",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title=" Custom Extensions And Integrations" />
      <Customextention />
    </>
  );
}

export default page;
