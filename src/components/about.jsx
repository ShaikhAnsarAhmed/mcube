import React from "react";

import { aboutCardData } from "@/constant/cardData";
import CommonCard from "@/components/global/commonCard";
import Heading from "@/components/global/Heading";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import "@/utills/tailwind-custom.css";

function About() {
  return (
    <div>
      <>
        <div>
          <div className="py-5 sm:py-16">
            <div className="custom-container ">
              <div>
                <div className="mb-5">
                  <Heading title="Who we are" />
                </div>

                <p className="py-2 md:text-xl  text-justify">
                  Mcube Consulting is a leading consulting Oracle ERP
                  Implementations. Established in 2014, we have been providing
                  expert advice and support to businesses of all sizes across
                  the globe.
                </p>
              </div>
            </div>

            <div className="py-5 sm:py-10   ">
              <div className="custom-container ">
                <SubHeadingLeft title="Our Mission" />
                <p className="md:text-xl py-5 text-justify">
                  Our mission is to help our clients achieve their business
                  objectives by providing innovative and customized solutions
                  that are tailored to their specific needs. We are committed to
                  delivering exceptional value to our clients through our
                  extensive industry knowledge, deep technical expertise, and a
                  collaborative approach to problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#eee]">
            <div className="custom-container  bg-[#eee] ">
              <div className="py-10 sm:py-20">
                <p className="md:text-xl">
                  {" "}
                  At MCube, we are guided by a set of core values that underpin
                  everything we do. These values include:
                </p>

                <div className="pt-10">
                  <CommonCard
                    cardData={aboutCardData}
                    gridData="sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
                  />
                </div>
                <div className="py-0">
                  <p className=" md:text-xl text-justify">
                    Our team is made up of experienced professionals with a
                    proven track record of success in Oracle ERP programmes. We
                    pride ourselves on our deep technical knowledge and our
                    ability to develop innovative and effective solutions that
                    deliver tangible business benefits.
                  </p>
                  <p className=" md:text-xl text-justify">
                    We are passionate about what we do and are dedicated to
                    helping our clients succeed. If you&apos;re looking for
                    expert advice and support to help you achieve your business
                    objectives, we invite you to get in touch with us today to
                    learn more about how we can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
