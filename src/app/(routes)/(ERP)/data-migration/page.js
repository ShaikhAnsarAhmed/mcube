import React from "react";
import Datamigration from "@/components/ERP/dataMigration";
import LandinBannaer from "@/components/global/landingBanner";

export const metadata = {
  title: "Data Migration",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};
function page() {
  return (
    <>
      <LandinBannaer title="Data Migration" />
      <Datamigration />
    </>
  );
}

export default page;
