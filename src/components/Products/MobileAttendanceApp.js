import Image from "next/image";
import React from "react";
import SubHeadingLeft from "../global/SubHeadingLeft";

function MobileAttendanceApp() {
  return (
    <div>
      <div className="py-10 custom-container ">
        <SubHeadingLeft title="Mobile Attendance App Features:" />
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/attendance.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">
              Organization / Company Registration
            </p>
            <p className="md:text-xl py-4">
              Learn how to navigate the M-Attendance app and register your
              organization or company with ease. The app is user-friendly,
              time-efficient, and ensures accurate data collection. Start by
              registering as the Admin, then add other members as users. Enjoy
              streamlined setup and onboarding processes, making it quick to get
              started.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/products/wifi.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="items-center">
            <p className="font-bold sm:text-xl md:text-2xl">
              Mark Attendance With WiFi
            </p>
            <p className="md:text-xl py-4">
              Track employee attendance and real-time presence using the Wi-Fi
              feature. Employees can mark attendance within the office Wi-Fi
              range, and admins can track locations with a few clicks. This
              method reduces manual errors and enhances the accuracy of
              attendance records. Additionally, it offers real-time updates for
              better management.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/gio.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">
              Add Geo-Fencing/Office Radius
            </p>
            <p className="md:text-xl py-4">
              Geofence use latitude, longitude, and radius to create virtual
              boundaries for marking attendance. It’s an accurate and effective
              way to track employee attendance. This feature ensures employees
              are within designated work areas when clocking in. It improves
              accountability and simplifies monitoring. The geofencing setup is
              easy to configure and manage.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/products/geo-fencing.png"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="items-center">
            <p className="font-bold sm:text-xl md:text-2xl">
              Mark Attendance with Geo-Fencing
            </p>
            <p className="md:text-xl py-4">
              Automatically mark attendance when within the set virtual
              perimeters of the office. This feature simplifies the check-in
              process for employees. It thus avoids manual entries, hence
              minimizing errors. The employee obtains a smooth, automated
              check-in experience. It also provides management with precise
              location data for each attendance entry.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/Screenshot 2024-08-13 131729.png"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">
              Mark Attendance with Selfie{" "}
            </p>
            <p className="md:text-xl py-4">
              Employees can check in with a selfie and GPS location data. This
              feature offers real-time, location-based attendance, quick
              check-ins, and a fun way to track attendance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAttendanceApp;
