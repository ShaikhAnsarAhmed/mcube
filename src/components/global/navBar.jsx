"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { NavData } from "@/constant/data";
import "@/utills/tailwind-custom.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [openSubNav, setOpenSubNav] = useState(false);
  const [title, setTitle] = useState("");
  const [titleSub, setTitleSub] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubNavOpen, setMobileSubNavOpen] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        pathname == "/" ? "z-50" : ""
      }  transition-colors duration-300 font-extrabold ${
        pathname == "/"
          ? scrollY < 150
            ? "bg-transparent  text-secondary"
            : "bg-white"
          : "bg-white"
      } ${
        scrollY >= 150 ? "shadow-md z-[999] text-secondary" : "text-secondary"
      } ${isLargeScreen ? "fixed top-0" : "text-secondary"}`}
    >
      <div className="sm:w-10/12 2xl:max-w-[100rem] w-full mx-auto px-5 sm:px-0">
        <div className=" sm:px-0 justify-between">
          <div className=" mx-auto flex justify-between items-center ">
            <div>
              <img
                src="/images/logo_low.png"
                className="w-16 sm:w-24 h-20 sm:h-[110px] py-2"
                alt=""
              />
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="  text-2xl"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div className={`hidden sm:flex items-center gap-x-5`}>
              {NavData.map((item, i) => (
                <div key={i} className="relative">
                  {item.LinkHref ? (
                    <Link href={item.LinkHref}>
                      <div
                        onMouseEnter={() => {
                          item.subNav && setOpenNav(true);
                          setTitle(item.title);
                        }}
                        className={`${
                          scrollY < 150
                            ? `${pathname == "/" ? "text-white" : ""}`
                            : " "
                        } text-xl px-2 py-[4px] rounded-sm font-semibold cursor-pointer transition ease-linear delay-300 `}
                      >
                        {item.title}
                      </div>
                    </Link>
                  ) : (
                    <div
                      onMouseEnter={() => {
                        item.subNav && setOpenNav(true);
                        setTitle(item.title);
                      }}
                      className={`${
                        scrollY < 150
                          ? `${pathname == "/" ? "text-white" : ""}`
                          : " "
                      } text-xl px-2 py-[4px] flex justify-between items-center  rounded-sm font-semibold cursor-pointer transition ease-linear delay-300 `}
                    >
                      <span>{item.title} </span>
                      <span className="pl-1 pt-1">
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          className={`${
                            openNav && item.subNav && item.title === title
                              ? "rotate-180"
                              : ""
                          } `}
                        >
                          <path
                            d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  )}

                  {openNav && item.subNav && item.title === title ? (
                    <div
                      onMouseLeave={() => setOpenNav(false)}
                      className="absolute top-12 left-0 z-50 bg-[#fff] shadow-2xl"
                    >
                      <div className=" flex-col divide-y-[1px] divide-logored gap-y-2 ">
                        {item.subNav.map((sub, index) => (
                          <div
                            key={index}
                            className="flex relative z-50 w-[230px]"
                          >
                            {sub.LinkHref ? (
                              <Link href={sub.LinkHref}>
                                <div
                                  className=" hover:bg-primary hover:text-white transition ease-linear font-[500] delay-300  w-[230px] text-sm text-nowrap px-2 py-[8px] cursor-pointer"
                                  onMouseEnter={() => {
                                    sub.subToSubNav && setOpenSubNav(true);
                                    setTitleSub(sub.title);
                                  }}
                                >
                                  {sub.title}
                                </div>
                              </Link>
                            ) : (
                              <div
                                className={`${
                                  openSubNav &&
                                  sub.subToSubNav &&
                                  sub.title === titleSub
                                    ? "bg-primary text-white"
                                    : ""
                                } hover:bg-primary hover:text-white text-primary transition ease-linear font-[500] delay-300  w-[230px] text-sm text-nowrap px-2 py-[8px] cursor-pointer`}
                                onMouseEnter={() => {
                                  sub.subToSubNav && setOpenSubNav(true);
                                  setTitleSub(sub.title);
                                }}
                              >
                                {sub.title}
                              </div>
                            )}

                            {openSubNav &&
                            sub.subToSubNav &&
                            sub.title === titleSub ? (
                              <div className=" text-primary absolute top-0 left-[230px] bg-[#fff] shadow-2xl    z-50  ">
                                <div className="flex flex-col divide-y-[1px] divide-logored ">
                                  {sub.subToSubNav.map((inSub, j) => (
                                    <Link href={inSub.LinkHref} key={j}>
                                      <div className="hover:bg-primary hover:text-white   w-[250px] transition font-[500] delay-300 ease-linear  text-sm px-2 py-[8px] text-nowrap cursor-pointer">
                                        {inSub.title}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden flex flex-col gap-y-2 bg-white  py-4">
              {NavData.map((item, i) => (
                <div key={i} className="relative">
                  {item.LinkHref ? (
                    <Link href={item.LinkHref}>
                      <div
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-xl bg-[#eee] pl-3 py-2 font-semibold cursor-pointer"
                      >
                        {item.title}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="text-xl flex items-center justify-between px-4 py-2 bg-[#eee] pl-3 font-semibold cursor-pointer"
                      onClick={() => {
                        setMobileSubNavOpen(mobileSubNavOpen === i ? null : i);
                      }}
                    >
                      <span>{item.title}</span>
                      <span className="">
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          className={`${
                            item.subNav && mobileSubNavOpen === i
                              ? "rotate-180"
                              : ""
                          } `}
                        >
                          <path
                            d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  )}

                  {item.subNav && mobileSubNavOpen === i && (
                    <div className="flex flex-col gap-y-2 mt-2 ml-4">
                      {item.subNav.map((sub, index) => (
                        <div key={index} className="flex flex-col">
                          {sub.LinkHref ? (
                            <Link href={sub.LinkHref}>
                              <div
                                onClick={() =>
                                  setMobileMenuOpen(!mobileMenuOpen)
                                }
                                className="text-base bg-[#eee] pl-3 px-4 py-2 cursor-pointer"
                              >
                                {sub.title}
                              </div>
                            </Link>
                          ) : (
                            <div className="text-base bg-[#eee] pl-3 px-4 py-2 cursor-pointer">
                              {sub.title}
                            </div>
                          )}

                          {sub.subToSubNav && (
                            <div className="flex flex-col gap-y-2 ml-4 mt-2">
                              {sub.subToSubNav.map((inSub, j) => (
                                <Link href={inSub.LinkHref} key={j}>
                                  <div
                                    onClick={() =>
                                      setMobileMenuOpen(!mobileMenuOpen)
                                    }
                                    className="text-sm px-4 py-2 bg-[#eee] pl-3 cursor-pointer"
                                  >
                                    {inSub.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
