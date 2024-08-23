import LandinBannaer from "@/components/global/landingBanner";
import MobileAttendanceApp from "@/components/Products/MobileAttendanceApp";
import React from "react";

export const metadata = {
  title: "Mobile Attendance App",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

function MobileAttendance() {
  return (
    <div>
      <LandinBannaer title="Mobile Attendance App" />
      <div className="py-10">
        <MobileAttendanceApp />
      </div>
    </div>
  );
}

export default MobileAttendance;
