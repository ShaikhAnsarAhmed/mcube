"use client";
import React from "react";

import Image from "next/image";
import SubHeadingLeft from "@/components/global/SubHeadingLeft";
import Corosal from "../corosal/corosal";
import Heading from "../global/Heading";

const softwareData = [
  {
    imgSrc: "/images/erp.jpg",
    title: " Feature-Packed College ERP Management Software",
  },
  {
    imgSrc: "/images/shoping.jpg",
    title: " ECommerce Websites",
  },
  {
    imgSrc: "/images/cms.png",
    title: " Content Management Software",
  },
  {
    imgSrc: "/images/Invoicing.png",
    title: "Custom Invoicing Software",
  },
  {
    imgSrc: "/images/webapp.jpg",
    title: "Web App Development",
  },
  {
    imgSrc: "/images/5467426_1720.jpg",
    title: " Mobile App Developement",
  },
];

const softwareDevData = [
  {
    title: "M-CRM",
    desc: "Customer Relationship Management (CRM) is a strategy to understand and manage customer relationships. It provides a comprehensive  view of customer preferences and helps manage sales and marketing  processes. Our CRM uses the SPANCO approach, which includes  Suspect, Prospect, Approach, Negotiate, Close, and Order stages. A  typical CRM system follows a sales methodology that can be broken  down into stages. These stages include identifying potential   customers (leads), qualifying leads as opportunities, negotiating  and closing deals, and fulfilling orders.",
    imgSrc: "/products/CRMjpg.png",
  },
  {
    title: "Olive prohealth",
    desc: "This app allows users to connect with local doctors via a question  answer feature. A patient can select the category of doctor and  put his details and raise a question about it. Then the respected  doctors will get notified about it and then they can answer about it. This app also shows banner ads which are uploaded by the  doctor. It also has a feature for a blog section doctor will  upload a blog written by him so that the user can see about it. It  also has a feature for users to upload a prescription and the local pharmacist which they are registered with in the app will  get notified about it and they can look into it and revert back  with the quotation.",
    imgSrc: "/products/hospital.png",
  },
  {
    title: "MGS Delivery",
    desc: "   Customer Relationship Management (CRM) is a strategy to understand and manage customer relationships. It provides a comprehensive view of customer preferences and helps manage sales and marketing  processes. Our CRM uses the SPANCO approach, which includes  Suspect, Prospect, Approach, Negotiate, Close, and Order stages. A   typical CRM system follows a sales methodology that can be broken down into stages. These stages include identifying potential  customers (leads), qualifying leads as opportunities, negotiating   and closing deals, and fulfilling orders.",
    imgSrc: "/products/delevery.png",
  },
  {
    title: "M-Attendance",
    desc: " This application provides attendance on a daily basis. Users can punch attendance using various options like WIFI, GPS (Geofencing), GPS (OnSite), Web, QrCode, Biometric, and selfie. It has a tracking system for mobile which tracks based on the GPS location of the user and the data is displayed in the software. It  also provides multiple types of reports, for example, day-wise reports, late-in reports, punch-in address reports, etc.",
    imgSrc: "/products/img011.png",
  },
  {
    title: "M-CMS App",
    desc: " We’ve created a college management system for various colleges and schools. It has features like fees reminder through notifications and emails, students homework, students attendance, time table,  employee record students record, study material and resources  sharing, Activity management, LMS leave management system. Also it  has multiple roles: login student, teacher and admin.",
    imgSrc: "/products/school.png",
  },
  {
    title: " Hotel and Restaurant Management Systems",
    desc: "  Introducing our cutting-edge Hotel and Restaurant Management  Systems: a comprehensive solution designed to streamline  operations, enhance guest experiences, and optimize management  processes. Our system integrates various functionalities,  including reservations, billing, inventory management, and customer relationship management, all within a user-friendly  interface. Whether you manage a boutique hotel or a bustling   restaurant, our system adapts to your specific needs, ensuring  efficient and smooth operations. Key features include real-time  analytics, automated reporting, seamless integration with   third-party services, and robust security measures. Empower your  business with our Hotel and Restaurant Management Systems and take  your hospitality services to the next level.",
    imgSrc: "/products/hotel.png",
  },
];

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
          {/* <SubHeadingLeft title="" /> */}
          <Heading title="MCube: Comprehensive Tech Solutions" />
          <p className="md:text-xl mt-5">
            MCube Offers Expertise In Coding, Designing, Programming And
            Testing.
          </p>

          <div className="py-5">
            <div className="py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {softwareData.map((item, i) => (
                <div
                  key={i}
                  className="image-container relative overflow-hidden rounded-lg shadow-lg hover:scale-105  transition duration-500  hover:shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    width={500}
                    height={500}
                    className="rounded-lg 2xl:w-full object-cover"
                    alt="Picture of the author"
                  />
                  <div className="overlay absolute bottom-0 left-0 w-full h-1/3 bg-gray-900 bg-opacity-75 flex items-center justify-center transform translate-y-full transition-transform duration-500">
                    <div className="text-white text-center p-4">
                      <p className="text-lg 2xl:text-2xl font-extrabold">
                        {" "}
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* corosal  */}

      <div className="py-5    custom-container ">
        <p className="md:text-xl">
          Our Team Of Knowledgeable And Experienced Software Professionals Is
          Well-Equipped To Offer You Defect-Free Software Solutions.
        </p>
        <div className="py-10">
          <Corosal />
        </div>
      </div>

      <div className="py-10 custom-container ">
        <div>
          <SubHeadingLeft title="Our Software Products" />
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-x-5 2xl:gap-x-10 2xl:gap-y-10 gap-y-5 my-5 sm:my-10">
          {softwareDevData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center  relative  group bg-[#eee] rounded-md"
            >
              <div className=" 2xl:w-auto 2xl:h-auto relative mx-auto  overflow-hidden ">
                <img
                  src={item.imgSrc}
                  alt="Destination"
                  className="w-full  mx-auto relative z-0 rounded-t-md transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute px-2 flex flex-col items-center justify-center bottom-0 font-semibold h-20 2xl:h-20 py-0 2xl:py-0 text-white bg-primary/60 group-hover:bg-primary/80 w-full sm:text-xl text-center ">
                  {item.title}
                </div>
              </div>

              <p className="md:text-base px-5 py-4 text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Softwaredevelopement;
