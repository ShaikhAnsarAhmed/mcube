import React from "react";
import CommonCard from "@/components/global/commonCard";
import { TrainingData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Treaning() {
  return (
    <div>
      <div className="py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <p className="md:text-xl py-4">
            Oracle training is critical for anyone who wants to maximize the
            value of their Oracle investment and fully leverage the power of the
            Oracle ERP system. Here are some key considerations for Oracle ERP
            training at Mcube
          </p>
          <div className="pt-10">
            <CommonCard
              cardData={TrainingData}
              gridData="sm:grid-cols-2"
              titleClassName="h-24"
              descClassName="sm:h-40 h-54 2xl:h-28"
            />
          </div>
          <p className="md:text-xl pb-5">
            Oracle ERP training is an essential component of any successful ERP
            implementation. By understanding the client&apos;s needs, selecting
            the right courses and delivery methods, providing experienced
            trainers, creating a suitable training environment, and providing
            ongoing support, you can deliver effective and engaging training
            that helps your clients get the most out of their Oracle ERP
            investment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Treaning;
