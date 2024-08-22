import React from "react";
import CommonCard from "@/components/global/commonCard";
import {
  ReportingDataOne,
  ReportingDataThree,
  ReportingDataTwo,
} from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Reporting() {
  return (
    <div>
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <p className="md:text-xl py-4">
            Oracle Transactional Business Intelligence (OTBI) and Business
            Intelligence Publisher (BIP) are two reporting tools offered by
            Oracle that help users extract, analyze and visualize data from
            their Oracle ERP system. Here&apos;s an overview of both reporting
            tools:
          </p>
          <div className="py-10">
            <SubHeadingLeft title="OTBI" />
          </div>
          <p className="md:text-xl py-4">
            OTBI is an intuitive and user-friendly reporting tool that allows
            users to create ad hoc reports on the fly, without needing technical
            expertise. It provides real-time data access and allows users to
            create highly customized reports with ease. Some of the key features
            of OTBI include:
          </p>
          <div className="py-10">
            <CommonCard
              cardData={ReportingDataOne}
              gridData="sm:grid-cols-3"
              descClassName="sm:h-28 h-28 2xl:h-20"
            />
          </div>
          <div className="py-10">
            <SubHeadingLeft title="BIP" />
          </div>
          <p className="md:text-xl py-4">
            BIP is a more advanced reporting tool that offers greater
            customization options and is designed for users with technical
            expertise. It allows users to create highly complex reports and
            documents with a wide range of formatting options. Some of the key
            features of BIP include:
          </p>{" "}
          <div className="pt-10">
            <CommonCard
              cardData={ReportingDataTwo}
              gridData="sm:grid-cols-3"
              titleClassName="h-28"
              descClassName="sm:h-32 h-32 2xl:h-24"
            />
          </div>
          <p className="md:text-xl ">
            {" "}
            Overall, both OTBI and BIP offer powerful reporting capabilities
            that can help users gain valuable insights from their Oracle ERP
            system. The choice between the two tools depends on the user&apos;s
            technical expertise and reporting requirements. Users who require
            highly customized reports with advanced formatting options may
            prefer BIP, while users who need to create ad hoc reports quickly
            and easily may find OTBI more suitable for their needs.
          </p>
          <p className="md:text-xl py-4">
            At Mcube, our approach to Oracle reporting is focused on providing
            our clients with the right reporting tools that meet their specific
            reporting requirements. Here are the key steps in our approach:
          </p>
          <div className="pt-10">
            <CommonCard
              cardData={ReportingDataThree}
              gridData="sm:grid-cols-3"
              descClassName="sm:h-52 h-56 2xl:h-36"
            />
          </div>
          <p className="md:text-xl ">
            Our approach to Oracle reporting is focused on providing our clients
            with a customized, reliable, and scalable reporting solution that
            meets their specific requirements. We leverage the best Oracle
            reporting tools and technologies to ensure that our clients get the
            most value from their reporting solution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reporting;
