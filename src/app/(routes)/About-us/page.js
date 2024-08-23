import About from "@/components/about";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "About MCube Consulting",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <div>
      <LandinBannaer title="About Us" />
      <About />
    </div>
  );
}

export default page;
