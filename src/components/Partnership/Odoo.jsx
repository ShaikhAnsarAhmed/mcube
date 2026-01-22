import React from "react";
import CommonCard from "@/components/global/commonCard";
import { odooERPServiceData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import { FaRegEdit, FaTasks, FaChartBar, FaChartLine } from "react-icons/fa";
import Image from "next/image";
function OdooERP() {
  return (
    <div>
      <div>
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          <div className="text">
            <h2 className="md:text-4xl">
              <SubHeadingLeft title=" Odoo ERP Implementation and Support with MCube Consulting" />
            </h2>
            <p className="py-4 md:text-xl text-justify">
              The shift toward smarter and better-connected business systems has
              sped up in a way that's hard to ignore, and a wide range of
              businesses now look to Odoo for its blend of flexibility and
              everyday efficiency. At MCube Consulting, we specialise in Odoo
              ERP implementations, helping organisations streamline processes,
              automate operations, and shift to Odoo in a way that doesn’t
              interrupt their day-to-day work with customised modules, seamless
              setup and expert end-to-end support. This is where our work really
              stands out.
            </p>
          </div>
          <div className="image ml-3 mb-3">
            <Image
              src="/images/odooerp.jpg"
              alt="pic"
              loading="lazy"
              width={400}
              height={400}
              className=" rounded-lg h-full w-full 2xl:h-[350px] "
            />
          </div>
        </div>

        <div className="  bg-[#f7f9fb] border-t border-solid ">
          <div className="custom-container  py-10">
            <div className=" ">
              <p className="md:text-xl justify-center ">
                {" "}
                Our team of experienced Odoo professionals provides a full range
                of Odoo ERP implementation services.
              </p>
              <div className="py-10">
                <SubHeadingLeft title=" Our Odoo ERP Solutions involves four key steps :" />
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
                      We start by getting familiar with your workflows as they
                      operate day to day, key challenges, and the goals that
                      guide your operations. This helps us find the Odoo modules
                      that fit best and map out what your organisation truly
                      needs before implementation. It gives us clarity and sets
                      the tone for how we shape the rest of the project.
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
                      Once the assessment is complete, we help you select the
                      relevant Odoo apps and outline a roadmap to keep the
                      process steady. It keeps everyone aligned. detailing
                      timelines, configurations, customisations, and data
                      migration.
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
                      Our experts configure Odoo, build the custom features you
                      need, and connect the system with your existing tools. We
                      ensure smooth setup, accurate data migration, and complete
                      alignment with your business processes. It reduces
                      disruption.
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
                      Once the system goes live we track performance, resolve
                      issues and refine workflows, so daily operations feel
                      smoother. We also provide ongoing support and training to
                      ensure your team uses Odoo effectively and confidently. It
                      strengthens adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container  py-10">
          <div className="py-10">
            <SubHeadingLeft title="Why Choose MCube Consulting for Your Odoo ERP Implementations?" />
          </div>
          <div className="py-10">
            <CommonCard
              cardData={odooERPServiceData}
              gridData="sm:grid-cols-2 2xl:grid-cols-4"
              descClassName="md:h-36 pb-5 md:pb-10"
            />
            <SubHeadingLeft title="Transform Your Business with MCube Consulting" />
            <p className="py-8 md:text-xl">
              Looking for a dedicated partner to implement, optimise, or support
              Odoo ERP within your organisation? MCube Consulting is ready to
              help. Contact us today to discover how our Odoo expertise can
              drive efficiency, growth, and long-term success.
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

export default OdooERP;
