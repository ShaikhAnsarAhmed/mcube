"use client";
import React from "react";

import Image from "next/image";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import Corosal from "../corosal/corosal";

function Softwaredevelopement() {
  return (
    <div>
      {/* SOFTWARE DEVELOPMENT PAGE HEADING SECTION END */}
      <style jsx>
        {`
          .image-container:hover .overlay {
            transform: translateY(0);
          }
        `}
      </style>
      <div className="custom-container ">
        <div className="py-10 text-black">
          <SubHeadingLeft title="MCube Offers Expertise In Coding, Designing, Programming And Testing." />

          <div className="py-5">
            <div className="py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/erp.jpg"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-extrabold">
                      {" "}
                      Feature-Packed College ERP Management Software
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/shoping.jpg"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-extrabold">
                      {" "}
                      ECommerce Websites
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/cms.png"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-extrabold">
                      Content Management Software
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/Invoicing.png"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-extrabold">
                      Custom Invoicing Software
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/webapp.jpg"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-extrabold">
                      Web App Development
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl">
                <Image
                  src="/images/5467426_1720.jpg"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  alt="Picture of the author"
                />
                <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                  <div className="text-white text-center p-4 ">
                    <p className="text-lg font-extrabold">
                      Mobile App Developement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* corosal  */}

      <div className="py-10    custom-container ">
        <p className="md:text-xl">
          Our Team Of Knowledgeable And Experienced Software Professionals Is
          Well-Equipped To Offer You Defect-Free Software Solutions.
        </p>
        <div className="py-10">
          <Corosal />
        </div>
      </div>

      <div className="py-10 custom-container ">
        <SubHeadingLeft title="Here Are Some Of Our Software Products:" />
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/attendance.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">M-Attendance</p>
            <p className="md:text-xl py-4">
              This application provides attendance on a daily basis. Users can
              punch attendance using various options like WIFI, GPS
              (Geofencing), GPS (OnSite), Web, QrCode, Biometric, and selfie. It
              has a tracking system for mobile which tracks based on the GPS
              location of the user and the data is displayed in the software. It
              also provides multiple types of reports, for example, day-wise
              reports, late-in reports, punch-in address reports, etc.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/products/CRMjpg.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="items-center">
            <p className="font-bold sm:text-xl md:text-2xl">M-CRM</p>
            <p className="md:text-xl py-4">
              Customer Relationship Management (CRM) is a strategy to understand
              and manage customer relationships. It provides a comprehensive
              view of customer preferences and helps manage sales and marketing
              processes. Our CRM uses the SPANCO approach, which includes
              Suspect, Prospect, Approach, Negotiate, Close, and Order stages. A
              typical CRM system follows a sales methodology that can be broken
              down into stages. These stages include identifying potential
              customers (leads), qualifying leads as opportunities, negotiating
              and closing deals, and fulfilling orders.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 custom-container ">
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/hospital.jpg"
              width={500}
              height={200}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">Olive prohealth</p>
            <p className="md:text-xl py-4">
              This app allows users to connect with local doctors via a question
              answer feature. A patient can select the category of doctor and
              put his details and raise a question about it. Then the respected
              doctors will get notified about it and then they can answer about
              it. This app also shows banner ads which are uploaded by the
              doctor. It also has a feature for a blog section doctor will
              upload a blog written by him so that the user can see about it. It
              also has a feature for users to upload a prescription and the
              local pharmacist which they are registered with in the app will
              get notified about it and they can look into it and revert back
              with the quotation.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/products/delevery.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="items-center">
            <p className="font-bold sm:text-xl md:text-2xl">MGS Delivery</p>
            <p className="md:text-xl py-4">
              Customer Relationship Management (CRM) is a strategy to understand
              and manage customer relationships. It provides a comprehensive
              view of customer preferences and helps manage sales and marketing
              processes. Our CRM uses the SPANCO approach, which includes
              Suspect, Prospect, Approach, Negotiate, Close, and Order stages. A
              typical CRM system follows a sales methodology that can be broken
              down into stages. These stages include identifying potential
              customers (leads), qualifying leads as opportunities, negotiating
              and closing deals, and fulfilling orders.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid cols-1 lg:grid-cols-2 gap-10  ">
          <div className="flex items-center justify-center ">
            <Image
              src="/products/school.jpg"
              width={500}
              height={200}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold sm:text-xl md:text-2xl">M-CMS App</p>
            <p className="md:text-xl py-4">
              We’ve created a college management system for various colleges and
              schools. It has features like fees reminder through notifications
              and emails, students homework, students attendance, time table,
              employee record students record, study material and resources
              sharing, Activity management, LMS leave management system. Also it
              has multiple roles: login student, teacher and admin.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 custom-container ">
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/products/hotel.jpg"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
              alt="M-Attendance"
            />
          </div>
          <div className="items-center">
            <p className="font-bold sm:text-xl md:text-2xl">
              Hotel and Restaurant Management Systems
            </p>
            <p className="md:text-xl py-4">
              Introducing our cutting-edge Hotel and Restaurant Management
              Systems: a comprehensive solution designed to streamline
              operations, enhance guest experiences, and optimize management
              processes. Our system integrates various functionalities,
              including reservations, billing, inventory management, and
              customer relationship management, all within a user-friendly
              interface. Whether you manage a boutique hotel or a bustling
              restaurant, our system adapts to your specific needs, ensuring
              efficient and smooth operations. Key features include real-time
              analytics, automated reporting, seamless integration with
              third-party services, and robust security measures. Empower your
              business with our Hotel and Restaurant Management Systems and take
              your hospitality services to the next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Softwaredevelopement;
