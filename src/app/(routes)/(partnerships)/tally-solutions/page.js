import LandinBannaer from "@/components/global/landingBanner";
import OdooERP from "@/components/Partnership/Odoo";
import Tally from "@/components/Partnership/Tally";
import React from "react";

export const metadata = {
  title: "Odoo ERP Solutions",
  description: "Odoo ERP Implementation and Support with MCube Consulting",
};

function Page() {
  return (
    <>
      <LandinBannaer
        title="Tally ERP Solutions "
      />
      <Tally/>
    </>
  );
}

export default Page;
