import React from "react";

import Upgrades from "@/components/ERP/upgrades";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "Upgrades",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};
function page() {
  return (
    <>
      <LandinBannaer title="Upgrades" />
      <Upgrades />
    </>
  );
}

export default page;
