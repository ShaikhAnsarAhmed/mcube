import Oraclecloud from "@/components/ERP/Oraclecloud";
import LandinBannaer from "@/components/global/landingBanner";
import React from "react";

export const metadata = {
  title: "Oracle ERP Cloud",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function Page() {
  return (
    <>
      <LandinBannaer
        title="Oracle ERP Cloud"
        subtitle="Oracle Cloud Implementations with MCube Consulting"
      />
      <Oraclecloud />
    </>
  );
}

export default Page;
