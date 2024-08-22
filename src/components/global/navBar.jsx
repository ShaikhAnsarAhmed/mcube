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
      <div className="custom-container">
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
                      } text-xl px-2 py-[4px] rounded-sm font-semibold cursor-pointer transition ease-linear delay-300 `}
                    >
                      {item.title}
                    </div>
                  )}

                  {openNav && item.subNav && item.title === title ? (
                    <div
                      onMouseLeave={() => setOpenNav(false)}
                      className="absolute top-12 left-0 z-50 bg-white"
                    >
                      <div className="border flex-col gap-y-2 border-white/30">
                        {item.subNav.map((sub, index) => (
                          <div
                            key={index}
                            className="flex relative z-50 w-[210px]"
                          >
                            {sub.LinkHref ? (
                              <Link href={sub.LinkHref}>
                                <div
                                  className="  transition ease-linear font-[500] delay-300  w-[210px] text-base text-nowrap px-2 py-[6px] cursor-pointer"
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
                                className="  text-secondary transition ease-linear font-[500] delay-300  w-[210px] text-base text-nowrap px-2 py-[6px] cursor-pointer"
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
                              <div className=" text-secondary absolute left-[210px] border border-white/30 flex-col gap-y-2 z-50 bg-white">
                                {sub.subToSubNav.map((inSub, j) => (
                                  <Link href={inSub.LinkHref} key={j}>
                                    <div className="  w-[210px] transition font-[500] delay-300 ease-linear  text-base px-2 py-[6px] text-nowrap cursor-pointer">
                                      {inSub.title}
                                    </div>
                                  </Link>
                                ))}
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
            <div className="sm:hidden flex flex-col gap-y-2 bg-ehite   py-4">
              {NavData.map((item, i) => (
                <div key={i} className="relative">
                  {item.LinkHref ? (
                    <Link href={item.LinkHref}>
                      <div
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-xl px-4 py-2 font-semibold cursor-pointer"
                      >
                        {item.title}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="text-xl px-4 py-2 font-semibold cursor-pointer"
                      onClick={() => {
                        setMobileSubNavOpen(mobileSubNavOpen === i ? null : i);
                      }}
                    >
                      {item.title}
                    </div>
                  )}

                  {item.subNav && mobileSubNavOpen === i && (
                    <div className="flex flex-col gap-y-2 ml-4">
                      {item.subNav.map((sub, index) => (
                        <div key={index} className="flex flex-col">
                          {sub.LinkHref ? (
                            <Link href={sub.LinkHref}>
                              <div
                                onClick={() =>
                                  setMobileMenuOpen(!mobileMenuOpen)
                                }
                                className="text-base px-4 py-2 cursor-pointer"
                              >
                                {sub.title}
                              </div>
                            </Link>
                          ) : (
                            <div className="text-base px-4 py-2 cursor-pointer">
                              {sub.title}
                            </div>
                          )}

                          {sub.subToSubNav && (
                            <div className="flex flex-col gap-y-2 ml-4">
                              {sub.subToSubNav.map((inSub, j) => (
                                <Link href={inSub.LinkHref} key={j}>
                                  <div
                                    onClick={() =>
                                      setMobileMenuOpen(!mobileMenuOpen)
                                    }
                                    className="text-sm px-4 py-2 cursor-pointer"
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
