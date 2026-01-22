import LandinBannaer from "@/components/global/landingBanner";
import OdooERP from "@/components/Partnership/Odoo";
import React from "react";

export const metadata = {
  title: "Odoo ERP Solutions",
  description: "Odoo ERP Implementation and Support with MCube Consulting",
};

function Page() {
  return (
    <>
      <LandinBannaer
        title="Odoo ERP Solutions"
      />
      <OdooERP/>
    </>
  );
}

export default Page;
