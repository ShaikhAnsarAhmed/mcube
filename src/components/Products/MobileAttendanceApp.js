import Image from "next/image";
import React from "react";

import Heading from "../global/Heading";

const attendanceData = [
  {
    title: "Organization / Company Registration",
    desc: "Learn how to navigate the M-Attendance app and register your organization or company with ease. The app is user-friendly, time-efficient, and ensures accurate data collection. Start by registering as the Admin, then add other members as users. Enjoy streamlined setup and onboarding processes, making it quick to get started.",
    imgSrc: "/products/img01.png",
  },
  {
    title: "Mark Attendance With WiFi",
    desc: " Track employee attendance and real-time presence using the Wi-Fi feature. Employees can mark attendance within the office Wi-Fi range, and admins can track locations with a few clicks. This  method reduces manual errors and enhances the accuracy of  attendance records. Additionally, it offers real-time updates for better management.",
    imgSrc: "/products/img02.png",
  },
  {
    title: " Add Geo-Fencing/Office Radius",
    desc: " Geofence use latitude, longitude, and radius to create virtual boundaries for marking attendance. It’s an accurate and effective way to track employee attendance. This feature ensures employees are within designated work areas when clocking in. It improves  accountability and simplifies monitoring. The geofencing setup is easy to configure and manage.",
    imgSrc: "/products/img03.png",
  },
  {
    title: " Mark Attendance with Geo-Fencing",
    desc: "Automatically mark attendance when within the set virtual  perimeters of the office. This feature simplifies the check-in    process for employees. It thus avoids manual entries, hence           minimizing errors. The employee obtains a smooth, automated  check-in experience. It also provides management with precise location data for each attendance entry.",
    imgSrc: "/products/img04.png",
  },
  {
    title: "Mark Attendance with Selfie",
    desc: "   Employees can check in with a selfie and GPS location data. This   feature offers real-time, location-based attendance, quick         check-ins, and a fun way to track attendance.",
    imgSrc: "/products/img05.png",
  },
];

function MobileAttendanceApp() {
  return (
    <div>
      <div className="py-5 sm:py-10 custom-container ">
        <Heading title="Mobile Attendance App Features" />

        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-x-5 2xl:gap-x-10 2xl:gap-y-10 gap-y-5 my-5 sm:my-10">
          {attendanceData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center  relative  group bg-[#eee] rounded-md"
            >
              <div className=" 2xl:w-auto 2xl:h-auto relative mx-auto  overflow-hidden ">
                <img
                  src={item.imgSrc}
                  alt="Destination"
                  className="w-full  mx-auto relative z-0 rounded-t-md transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute flex flex-col items-center justify-center bottom-0 font-semibold h-20 2xl:h-20 py-0 2xl:py-0 text-white bg-primary/60 group-hover:bg-primary/80 w-full sm:text-xl text-center ">
                  {item.title}
                </div>
              </div>

              <p className="md:text-base px-5 py-4 text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileAttendanceApp;
