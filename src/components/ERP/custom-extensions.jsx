import React from "react";
import CommonCard from "@/components/global/commonCard";
import { CustomExtensionsData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Customextention() {
  return (
    <div>
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <p className="md:text-xl py-4">
            Oracle Custom Extensions and Integrations are a critical aspect of
            Oracle ERP implementations. They are used to extend the
            functionality of the ERP system, integrate with other systems, and
            meet specific business requirements. Here are the key steps involved
            in Oracle Custom Extensions and Integrations at MCube :
          </p>
          <p className="md:text-xl py-4">
            Our approach to Oracle Custom Extensions and Integrations is focused
            on providing our clients with a customized, reliable, and scalable
            solution that meets their specific requirements. We leverage the
            best Oracle tools and technologies to ensure that our clients get
            the most value from their custom development.
          </p>
          <div className="py-10">
            <CommonCard
              cardData={CustomExtensionsData}
              gridData="sm:grid-cols-3"
              descClassName="sm:h-56 h-56 2xl:h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customextention;
