import React from "react";

import Image from "next/image";

import { EBSData } from "@/constant/cardData";
import CommonCard from "@/components/global/commonCard";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Ebs() {
  return (
    <div>
      <div>
        <div className="custom-container   py-10">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 2xl:gap-x-16 py-5">
            <img
              src="/images/oracalEsute.png"
              className=" rounded-xl lg:h-[590px] 2xl:h-[420px] w-full"
              alt=""
            />

            <div>
              <p className="md:text-xl ">
                We specialize in Oracle eBusiness Suite ERP implementation. As a
                leading provider of Oracle consulting services, are committed to
                delivering the best in className implementation solutions to
                businesses of all sizes and industries.
              </p>
              <p className="md:text-xl py-4">
                Our team of highly experienced Oracle ERP consultants are
                proficient in implementing Oracle eBusiness Suite ERP, which
                offers comprehensive business management solutions for
                financials, human resources, procurement, supply chain,
                projects, and customer relationship management. Our
                implementation services include project management, business
                process review, system design and configuration, data migration,
                testing, training, and ongoing support.
              </p>
              <p className="md:text-xl py-4">
                {" "}
                We understand that every organization has unique business
                requirements and challenges, and our approach is to work closely
                with our clients to deliver tailor-made solutions that are
                aligned with their business objectives. Our implementation
                methodology is based on industry best practices, and we ensure
                that our solutions are scalable, flexible, and easy to maintain.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-[url('/images/white-bg.jpg')]  bg-cover bg-center">
          <div className="custom-container  py-10">
            <SubHeadingLeft title="Our Oracle eBusiness Suite ERP implementation services include " />

            <div className="pt-14">
              <CommonCard
                cardData={EBSData}
                gridData="sm:grid-cols-2"
                descClassName="h-32"
              />
            </div>

            <p className="pt-5 md:text-xl">
              {" "}
              At MCube, we are committed to delivering high-quality Oracle
              eBusiness Suite ERP implementation services that are customized to
              meet your unique business needs. Contact us today to learn how we
              can help you streamline your business processes and improve your
              bottom line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ebs;
