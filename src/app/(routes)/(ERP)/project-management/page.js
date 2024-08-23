import React from "react";
import Projectmanagement from "@/components/ERP/projectManagement";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "Project Management",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function page() {
  return (
    <>
      <LandinBannaer title="Project Management" />
      <Projectmanagement />
    </>
  );
}

export default page;
