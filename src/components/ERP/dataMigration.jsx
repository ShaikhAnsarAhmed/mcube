import React from "react";
import CommonCard from "@/components/global/commonCard";
import { DataMigrationData } from "@/constant/cardData";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
function Datamigration() {
  return (
    <div>
      <div>
        <div className="py-10">
          <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
            <p className="md:text-xl py-4">
              Oracle ERP Data Migration is the process of moving data from one
              or more sources to an Oracle ERP system. Here&apos;s a general
              approach for Oracle ERP data migration which we take at Mcube
              Consulting
            </p>
            <div className="py-5">
              <SubHeadingLeft title="Typical project management methodology and approach Include:" />
            </div>
            <div className="py-10 ">
              <CommonCard
                cardData={DataMigrationData}
                className=""
                gridData="sm:grid-cols-1"
                titleClassNam="pb-3"
                listClassName="h-[350px] sm:h-[150px]"
              />
            </div>
            <p className="md:text-xl ">
              It&apos;s important to note that the data migration approach may
              vary depending on the specific requirements of each migration
              project. Also, a successful data migration is not only a technical
              exercise but also requires strong project management and
              stakeholder engagement to ensure that the migrated data meets the
              business requirements and is accepted by the end-users.
            </p>
            <p className="md:text-xl ">
              We typically recommend a few rounds of Data Migration test cycles
              before we do the dry run before the actual Cutover Data Mirgation
              cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datamigration;
