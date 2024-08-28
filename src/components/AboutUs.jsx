import React from "react";

import { aboutCardData } from "@/constant/cardData";
import CommonCard from "@/components/global/commonCard";
import Heading from "@/components/global/Heading";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import "@/utills/tailwind-custom.css";
import Image from "next/image";
const WhatWeDoData = [
  {
    title: "ERP Implementations",
    desc: "We specialize in the deployment of robust ERP systems that streamline operations and improve decision-making across the enterprise.",
  },
  {
    title: "Project Management",
    desc: "Our project management services ensure that your initiatives are delivered on time, within scope, and on budget, with a focus on quality and results.",
  },
  {
    title: "Data Migration",
    desc: "We provide seamless data migration services that ensure your critical business data is transferred securely and efficiently, minimizing disruption.",
  },
  {
    title: "Back Office Transformation",
    desc: "We help organizations optimize their back office operations, driving efficiency and cost savings through automation and process improvements.",
  },
];

const partner = [
  {
    title: "Website and Portal Development ",
    desc: "Crafting modern, responsive websites and portals that enhance your online presence.",
  },
  {
    title: "Mobile Application Development",
    desc: "Building intuitive, user-friendly mobile applications tailored to your business needs.",
  },
  {
    title: "SEO and Digital Marketing",
    desc: "Boosting your digital footprint through effective SEO strategies and targeted digital marketing campaigns.",
  },
];

function AboutUs() {
  return (
    <div>
      <>
        <div>
          <div className="py-5 sm:py-16">
            {/* WHO WE ARE */}
            <div className="custom-container ">
              <div>
                <Heading title="Who we are" />

                <p className="py-2 md:text-xl justify-center">
                  <b>MCube Consulting</b> is a leading IT business consulting
                  firm, dedicated to empowering companies on their digital
                  transformation journeys. Since our inception in 2014, we have
                  been committed to delivering tailored solutions that drive
                  business growth, enhance efficiency, and foster long-term
                  success. With offices in the UK and Dubai Silicon Oasis, and a
                  strategic partnership with India's technology powerhouse,
                  Moksha, we are well-positioned to serve a global clientele.
                </p>
              </div>
            </div>
            {/* OUR MISSION */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Our Mission" />
                <p className="md:text-xl py-5">
                  At MCube Consulting, our mission is clear: to empower
                  companies in their digital transformation journey. We provide
                  tailored IT business consulting services, including ERP
                  implementation, project management, data migration, back
                  office transformation, and more. By placing ourselves in our
                  clients' shoes, we strive to deliver transparent, ethical, and
                  innovative solutions that drive business growth and
                  efficiency.
                </p>
              </div>
            </div>
            {/* OUR VISION */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Our Vision" />
                <p className="md:text-xl py-5">
                  We envision a future where every customer can harness the full
                  potential of digital technologies to thrive in an increasingly
                  connected world. Our goal is to be the trusted partner of
                  choice for businesses seeking to navigate their digital
                  evolution. We are committed to fostering long-term
                  relationships built on expertise, integrity, and mutual
                  success.
                </p>
              </div>
            </div>
            {/* WHAT WE DO */}
            <div className="bg-[#eee]">
              <div className="custom-container  py-5 sm:py-10 ">
                <div className=" ">
                  <SubHeadingLeft title="What We Do" />
                  <p className="md:text-xl py-5">
                    MCube Consulting offers a comprehensive suite of services
                    designed to meet the diverse needs of businesses across
                    industries:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-5 gap-y-5 my-3">
                    {WhatWeDoData.map((item, i) => (
                      <div
                        key={i}
                        //   className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50"
                        className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-primary via-[#2a6889] to-[#5aa5ce] text-gray-50"
                      >
                        <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-full h-full  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                          <div className="text p-3 2xl:p-5 flex flex-col items-start justify-evenly h-full ">
                            <span className="font-semibold text-2xl h-16">
                              {item.title}
                            </span>
                            <p className="subtitle py-3">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* OUR Partnership with Moksha */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Our Partnership with Moksha" />
                <p className="md:text-xl py-5">
                  Through our strategic partnership with Moksha, a leading
                  technology company in India, we extend our service offerings
                  to include:
                </p>

                <div className="my-5 grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-5">
                  {partner.map((item, i) => (
                    <div
                      key={i}
                      className="relative group overflow-hidden h-[24rem] 2xl:h-[28rem] rounded-3xl cursor-pointer text-2xl font-bold bg-[#eee]"
                    >
                      <div className="z-10 absolute w-full h-full peer"></div>
                      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-36 2xl:-top-24 -left-20 2xl:-left-12 w-32 h-44 rounded-full bg-primary transition-all duration-500"></div>
                      <div className="absolute text-white px-10 flex text-xl  text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-36 2xl:-bottom-24 2xl:-right-12 -right-20 w-36 h-44 rounded-full bg-primary transition-all duration-500">
                        <span className="text-xl hidden group-hover:block ">
                          {item.desc}
                        </span>
                      </div>
                      <div className="w-full h-full px-10 text-2xl text-center items-center justify-center flex ">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* OUR Global presence */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Our Global Presence" />
                <p className="md:text-xl py-5">
                  From our headquarters in the UK to our newly established
                  office in Dubai Silicon Oasis, MCube Consulting is committed
                  to being where our clients need us most. Our expansion into
                  Dubai allows us to better serve clients in the Middle East,
                  providing them with local expertise and support as they embark
                  on their digital transformation journeys.
                </p>
              </div>
            </div>

            {/* Why Chooose Mcube */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Why Choose MCube Consulting?" />
                <p className="md:text-xl py-5">
                  At MCube Consulting, we differentiate ourselves through our
                  deep industry expertise, commitment to ethical practices, and
                  a client-centric approach. We pride ourselves on delivering
                  innovative solutions that are tailored to the unique needs of
                  each client. Our team of seasoned professionals brings years
                  of experience and a passion for technology, ensuring that we
                  exceed expectations at every turn.
                </p>
              </div>
            </div>
            {/* Get in touch */}
            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Get in Touch" />
                <p className="md:text-xl py-5">
                  We&apos;d love to hear from you. Whether you're looking to
                  start a new project or need guidance on your digital
                  transformation, MCube Consulting is here to help. Contact us
                  today to learn how we can work together to drive your business
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AboutUs;
