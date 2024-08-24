"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowDownRightFromCircle } from "react-icons/lu";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const aboutUsArray = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/About-us",
  },
  {
    id: 21,
    name: "Mobile Attendance App",
    link: "/mobile-attendance-app",
  },

  {
    id: 22,
    name: "CMS Software",
    link: "/cms-for-schools",
  },
  {
    id: 23,
    name: "M-CRM ERP",
    link: "/m-crm",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact-us",
  },
  // {
  //   id: 4,
  //   name: "Career",
  //   link: "/Career",
  // },
  // {
  //   id: 5,
  //   name: "Terms And Conditions",
  //   link: "/TermsAndConditions",
  // },
  // {
  //   id: 6,
  //   name: "Privacy Policy",
  //   link: "/PrivacyPolicy",
  // },
];

const ourServicesArray = [
  {
    linkHref: "/EBS",
    title: "Oracle eBusiness Suite (EBS)",
    id: 7,
  },
  {
    linkHref: "/OracleERPCloud",
    title: "Oracle ERP Cloud",
    id: 8,
  },
  {
    linkHref: "/project-management",
    title: "Project Management",
    id: 9,
  },
  {
    linkHref: "/data-migration",
    title: "Data Migration",
    id: 10,
  },
  {
    linkHref: "/managed-services",
    title: "Managed Services",
    id: 11,
  },
  {
    linkHref: "/upgrades",
    title: "Upgrades",
    id: 12,
  },
  {
    linkHref: "/reporting",
    title: "Reporting",
    id: 13,
  },
  {
    linkHref: "/cutover-management",
    title: "Cutover Management",
    id: 14,
  },
  {
    linkHref: "/custom-extensions",
    title: "Custom Ext. & Integrations",
    id: 15,
  },
  {
    linkHref: "/training",
    title: "Training",
    id: 16,
  },
  {
    linkHref: "/website-design",
    title: "Website Design & Development",
    id: 17,
  },
  {
    linkHref: "/software-development",
    title: "Software Development",
    id: 18,
  },
  {
    linkHref: "/mobile-app-developement",
    title: "Mobile App Development",
    id: 19,
  },
  {
    linkHref: "/digital-marketing",
    title: "Digital Marketing",
    id: 20,
  },
];

const ourProductsArray = [
  {
    id: 21,
    name: "Mobile Attendance App",
    link: "/MobileAttendance",
  },
  {
    id: 22,
    name: "CMS Software",
    link: "/CMSSoftware",
  },
  {
    id: 23,
    name: "ERP for Schools",
    link: "/ERPforSchools",
  },
];
function Footer() {
  const [activeTab, setActiveTab] = useState(1);
  const pathname = usePathname();
  console.log(pathname, "path name");
  return (
    <div>
      <div className="">
        {/* call to action */}
        {pathname !== "/contact-us" ? (
          <div className="background-animate py-10 lg:py-16 2xl:py-24 w-full h-auto px-5 sm:px-0  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
            <div className="sm:w-10/12 2xl:max-w-[100rem] w-full mx-auto px-5 sm:px-0">
              <p className="text-white text-lg lg:text-2xl 2xl:text-4xl py-0 sm:pb-2 2xl:pb-5">
                Convinced? Confused? Have Ideas?
              </p>
              <h1 className="text-white text-3xl sm:text-5xl 2xl:text-6xl leading-tight  font-extrabold pb-7 lg:pb-8 2xl:mb-6">
                Our adaptability and Scalability will surprise you.
              </h1>
              <Link
                className=" mt-7  py-3 px-5 lg:px-8 lg:py-3 2xl:px-10 2xl:py-4 border border-white  bg-transparent text-white text-lg lg:text-lg 2xl:text-2xl font-semibold hover:bg-white hover:text-[#004368] hover:border-white"
                href="/contact-us"
              >
                Let&apos;s talk!
              </Link>
            </div>
          </div>
        ) : null}

        {/* Main Footer */}
        <div className="w-full h-auto bg-[#004368] z-40 pt-10 ">
          <div className="sm:w-10/12 2xl:max-w-[100rem] w-full mx-auto px-5 sm:px-0 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-3 gap-x-0 sm:gap-x-10 justify-between sm:gap-y-2">
              {/* Address */}
              <div>
                <div className="pb-8 sm:pb-11  z-40 flex flex-col  items-center justify-center sm:items-start sm:justify-start sm:flex-col ">
                  <div className="">
                    <Link href="/" className="">
                      <Image
                        src="/images/logo.jpeg"
                        alt="pic"
                        width={1000}
                        height={1000}
                        className="p-1 w-40 sm:w-52 h-full  border border-white"
                      />
                    </Link>
                  </div>

                  {/* social media icons */}
                  <div className="">
                    <div className=" flex sm:justify-start gap-x-4 py-4   sm:gap-x-2 sm:py-3">
                      <Link href="/" target="_blank">
                        <button
                          className="bg-gray-400 hover:bg-white text-white  transition-colors ease-in duration-200
                         hover:text-[#004368]  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <BsFacebook className="text-2xl" />
                        </button>
                      </Link>

                      <Link href="/" target="_blank">
                        <button
                          className="bg-gray-400 hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-red-600  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <FaInstagram className="text-2xl" />
                          {/* <BsTwitter className="text-2xl" /> */}
                        </button>
                      </Link>

                      <Link href="/" target="_blank">
                        <button
                          className="bg-gray-400 hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-black  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <FaXTwitter className="text-2xl" />
                          {/* <BsTwitter className="text-2xl" /> */}
                        </button>
                      </Link>

                      <Link href="/" target="_blank">
                        <button
                          className="bg-gray-400 hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-blue-900  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <FaLinkedinIn className="text-2xl" />
                          {/* <BsTwitter className="text-2xl" /> */}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* About US Section */}
              <div className="pb-8 sm:pb-0 flex flex-col  order-1 ">
                <h1 className="text-red-500  font-extrabold text-2xl sm:text-xl  pb-5  ">
                  <span className="border-t-4 border-solid border-red-500 text-white pt-[1px]">
                    INFORMATION
                  </span>{" "}
                </h1>
                <div className="flex flex-col  gap-y-2 ">
                  {aboutUsArray.map((item, i) =>
                    item.link ? (
                      <div
                        onClick={() => setActiveTab(item.id)}
                        className="group w-fit"
                        key={i}
                      >
                        <Link
                          href={item.link}
                          className={` group-hover:text-white font-medium text-sm sm:text-sm flex items-start transition-colors duration-300 ease-in-out ${
                            item.id == activeTab
                              ? "text-gray-400"
                              : "text-gray-400"
                          } `}
                        >
                          <div className="pr-2">
                            <LuArrowDownRightFromCircle
                              className={`group-hover:text-white group-hover:-rotate-45 mt-1 transition-transform duration-300 ease-in-out ${
                                item.id == activeTab ? " " : ""
                              } `}
                            />
                          </div>
                          <div className="">{item.name}</div>
                        </Link>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              {/* Our Services Section */}
              <div className="pb-8 sm:pb-0 order-2 col-span-1 sm:col-span-2">
                <h1 className="text-red-500  font-extrabold text-2xl sm:text-xl   pb-5">
                  <span className="border-t-4 border-solid border-red-500 text-white pt-[1]">
                    OUR
                  </span>{" "}
                  SERVICES
                </h1>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {ourServicesArray.map((items, index) =>
                    items.linkHref ? (
                      <div
                        onClick={() => setActiveTab(items.id)}
                        className="group w-fit"
                        key={index}
                      >
                        <Link
                          href={items.linkHref}
                          className={` group-hover:text-white font-medium text-sm sm:text-sm flex items-start transition-colors duration-300 ease-in-out ${
                            items.id == activeTab
                              ? "text-gray-400"
                              : "text-gray-400"
                          } `}
                        >
                          <div className="px-2 py-1 border  border-1-white">
                            {items.title}
                          </div>
                        </Link>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center flex-wrap mt-0  lg:px-0  lg:mx-auto  pt-5 gap-y-3 sm:gap-y-0">
              <p className=" text-xs font-light text-[#50839e]">
                2024 &copy;All Right Reserved By MCube Consulting
              </p>
              <Link href="https://mokshasolutions.com" target="_blank">
                <span
                  title="Rest Website developement Company"
                  className=" text-xs font-light group text-[#50839e] "
                >
                  Designed and Developed by{" "}
                  <span className=" group-hover:text-white">
                    Moksha Solutions
                  </span>
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
