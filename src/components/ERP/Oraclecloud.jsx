import React from "react";
import CommonCard from "@/components/global/commonCard";
import { oracalERPCloudeCardData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { FaRegEdit, FaTasks, FaChartBar, FaChartLine } from "react-icons/fa";
import Image from "next/image";
function Oraclecloud() {
  return (
    <div>
      <div>
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0 py-10">
          <p className="py-4 md:text-xl ">
            The move to the cloud is one of the biggest technology trends of the
            last decade, and organizations of all sizes are taking advantage of
            its benefits. At MCube Consulting, we are experts in Oracle Cloud
            implementations and are dedicated to helping our clients make the
            transition to the cloud smoothly and efficiently.
          </p>
        </div>

        <div className="  bg-[#f7f9fb] border-t border-solid ">
          <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0 py-10">
            <div className=" ">
              <p className="md:text-xl justify-center ">
                {" "}
                Our team of experienced and certified Oracle professionals
                provides a full range of Oracle cloud implementation services.
              </p>
              <div className="py-10">
                <SubHeadingLeft title=" Our Cloud Implementation Process  involves four key steps :" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 sm:gap-x-5 sm:gap-y-5 ">
                <div className=" hover:bg-secondary   border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/assignment.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl"
                    alt="Picture of the author"
                  />
                  <div className="p-4   group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Assignmenet
                    </p>
                    <p className="md:text-xl ">
                      We take the time to understand your current business
                      processes, systems, and goals, and conduct a thorough
                      assessment of your organization.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/planning.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl"
                    alt="Picture of the author"
                  />
                  <div className="p-4   group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Planning
                    </p>
                    <p className="md:text-xl ">
                      Based on the results of our assessment, we work with you
                      to develop a detailed plan for your business
                      transformation, including timelines, budgets, and key
                      milestones.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/process.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl"
                    alt="Picture of the author"
                  />
                  <div className="p-4   group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Implementation
                    </p>
                    <p className="md:text-xl ">
                      Our team of experts will implement the plan, ensuring that
                      all changes are made smoothly and efficiently, and that
                      your business continues to operate without disruption.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/monitoring.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl"
                    alt="Picture of the author"
                  />
                  <div className="p-4   group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Monitoring
                    </p>
                    <p className="md:text-xl ">
                      After the transformation has been completed, we will
                      monitor the results and work with you to continuously
                      improve and optimize your systems and processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0 py-10">
          <div className="py-10">
            <SubHeadingLeft title=" Why Choose MCube Consulting for your Oracle Cloud ERP  Implementations?" />
          </div>
          <div className="py-10">
            <CommonCard
              cardData={oracalERPCloudeCardData}
              gridData="sm:grid-cols-2"
              descClassName="sm:h-28 h-36"
            />
            <SubHeadingLeft title="Transform Your Business with MCube Consulting" />
            <p className="py-5  md:text-xl">
              If you&apos;re looking for a partner to help you implement Oracle
              Cloud ERP for your business and achieve your goals, look no
              further than MCube Consulting. Contact us today to learn more
              about our business transformation services and how we can help you
              achieve success.
            </p>
          </div>
        </div>
        {/* <div className="pt-5 sm:pt-10 w-full px-5 h-auto   md:w-8/12 md:px-0 lg:w-8/12 mx-auto lg:px-0  ">
          <h5 className="text-[#303030]   pb-14  text-justify "></h5>
        </div> */}
      </div>
    </div>
  );
}

export default Oraclecloud;
