import DigitalMarketing from "@/components/DevAndMarketing/digitalMarketing";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Digital Marketing",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <div>
      <LandinBannaer title="Digital Marketing" />
      <DigitalMarketing />
    </div>
  );
}

export default page;
