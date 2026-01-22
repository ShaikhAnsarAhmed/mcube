import React from "react";
import CommonCard from "@/components/global/commonCard";
import { odooERPServiceData, tallyERPServiceData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { FaRegEdit, FaTasks, FaChartBar, FaChartLine } from "react-icons/fa";
import Image from "next/image";
function Tally() {
  return (
    <div>
      <div>
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          <div className="text">
            <h2 className="md:text-4xl">
              <SubHeadingLeft title=" Tally ERP Implementation and Support with MCube Consulting " />
            </h2>
            <p className="py-4 md:text-xl text-justify">
              As businesses shift toward smarter and more efficient financial
              systems, it’s a shift most teams have been expecting. Tally
              remains a trusted choice for small and medium enterprises seeking
              accuracy, ease of use, and reliable compliance. These priorities
              are more critical than ever. Businesses expect efficiency. At
              MCube Consulting, our expertise lies in Tally ERP implementation,
              helping organisations streamline accounting and better manage
              inventory, automate workflows with minimal disruption, and adopt
              Tally with an easy setup, tailored configurations, and expert
              end-to-end support.
            </p>
          </div>
          <div className="image mx-auto">
            <Image
              src="/images/tally.jpg"
              alt="pic"
              loading="lazy"
              width={400}
              height={400}
              className=" rounded-lg h-[400px] w-[400px] 2xl:h-[350px] "
            />
          </div>
        </div>

        <div className="  bg-[#f7f9fb] border-t border-solid ">
          <div className="custom-container  py-10">
            <div className=" ">
              <p className="md:text-xl justify-center ">
                {" "}
                Our team of experienced Tally professionals provides a full
                range of Tally ERP implementation services.
              </p>
              <div className="py-10">
                <SubHeadingLeft title=" Our Tally ERP Solutions involves four key steps :" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 sm:gap-x-5 sm:gap-y-5 ">
                <div className=" hover:bg-secondary border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl transition duration-500 ">
                  <Image
                    src="/cards/assignment.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl w-full"
                    alt="Picture of the author"
                  />
                  <div className="p-4 group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Assessment
                    </p>
                    <p className="md:text-lg text-justify ">
                      We begin by reviewing your accounting workflows,
                      compliance expectations, and the operational challenges
                      you’re dealing with. This allows us to find the Tally
                      configuration that fits you best and map out the features
                      your organisation truly needs before implementation. It
                      gives, us a clear direction.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/planning.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl w-full "
                    alt="Picture of the author"
                  />
                  <div className="p-4 group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Planning
                    </p>
                    <p className="md:text-lg text-justify">
                      Once the assessment is complete, we create a detailed
                      roadmap that includes VAT setup, payroll configuration,
                      ledger design, invoicing formats, data migration, and
                      needed integrations so the system fits your processes
                      well. It keeps, everything structured.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/process.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl w-full"
                    alt="Picture of the author"
                  />
                  <div className="p-4 group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Implementation
                    </p>
                    <p className="md:text-lg text-justify">
                      We configure Tally, migrate legacy accounting data and
                      adjust formats to fit your organisation’s needs. We ensure
                      accurate setup, smooth integration with your workflows;
                      and a steady structure for everyday financial operations.
                      It reduces early-stage errors.
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-secondary  border-2 border-orange-400 rounded-xl group  justify-center items-center hover:scale-110  hover:shadow-2xl  transition duration-500 ">
                  <Image
                    src="/cards/monitoring.jpg"
                    width={400}
                    height={400}
                    className=" rounded-t-xl w-full"
                    alt="Picture of the author"
                  />
                  <div className="p-4 mt-5  group-hover:text-white rounded-b-xl">
                    <p className="md:text-2xl sm:text-xl font-extrabold">
                      Monitoring
                    </p>
                    <p className="md:text-lg text-justify">
                      Once Tally goes live, we monitor system performance,
                      resolve issues and refine workflows for maximum accuracy.
                      We also provide ongoing support and training to ensure
                      your accounts team uses Tally confidently and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container  py-10">
          <div className="py-10">
            <SubHeadingLeft title="Why Choose MCube Consulting for Your Tally ERP Implementations?" />
          </div>
          <div className="py-10">
            <CommonCard
              cardData={tallyERPServiceData}
              gridData="sm:grid-cols-2 2xl:grid-cols-4"
              descClassName=" md:h-36 pb-5 md:pb-10"
            />
            <SubHeadingLeft title="Transform Your Business with MCube Consulting" />
            <p className="py-8 md:text-xl">
              If you're looking for a reliable partner to help you implement
              Tally ERP and strengthen your accounting operations, MCube
              Consulting is here to support you. Contact us today to learn more
              about our Tally services and how we can help your business operate
              with greater confidence and control.
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

export default Tally;
