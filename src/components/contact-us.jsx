"use client";
import React, { useState } from "react";

import Heading from "./global/Heading";
import { toast } from "react-toastify";
import { send } from "emailjs-com";
// import MapComponent from "./MapComponent";
import "@/utills/tailwind-custom.css";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    query: "",
  });
  const [isLoader, setisLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    setisLoader(true);
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    const user_id = process.env.NEXT_PUBLIC_USER_ID;

    console.log(formData, "form data");

    /* --- METHOD TO SEND THE MAIL --- */
    send(service_id, template_id, formData, user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          query: "",
        });
        toast.success(
          "Thanks for sending us your request, a team member will get in touch to discuss this further."
        );
        setisLoader(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failure in Data Submission");
        setisLoader(false);
      });
  };

  return (
    <div>
      <div className="py-10 sm:py-10">
        <div className="custom-container">
          <div>
            <Heading title="Our Locations" />
          </div>
          <div className="bg-[url('/images/mcubeMap.jpg')] bg-center bg-cover hidden sm:block">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-y-5">
                  <div className="bg-white/60 pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                    <h3 className="text-primary text-xl font-bold ">Dubai </h3>
                    <p className="py-2 text-lg font-normal">
                      MCube Consulting - FZCO
                      <br /> Building A1, Dubai Digital Park, <br />
                      Dubai Silicon Oasis, <br />
                      Dubai - UAE
                    </p>
                  </div>
                  <div className="bg-white/60 pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                    <h3 className="text-primary text-xl font-bold ">
                      United kingdom
                    </h3>
                    <p className="py-2 text-lg font-normal">
                      MCube Consulting Limited
                      <br /> 141 Fen Street, <br />
                      Brooklands, <br />
                      Milton Keynes - UK
                    </p>
                  </div>
                  <div className="bg-white/60 pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                    <h3 className="text-primary text-xl font-bold ">India</h3>
                    <p className="py-2 text-lg font-normal">
                      Moksha Solutions (Technology Partners)
                      <br /> Office No. 311, Sai Trade Centre, <br />
                      Railway Station Road, Aurangabad, <br />
                      Maharashtra - India
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="sm:hidden grid grid-cols-1  gap-x-5 gap-y-5">
            <div className="mt-3 ">
              <img
                src="/images/mcubeMap.jpg"
                alt=""
                className="w-full h-auto 2xl:h-auto sm:h-auto"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-5">
              <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                <h3 className="text-primary text-xl font-bold ">Dubai </h3>
                <p className="py-2 text-lg font-normal">
                  MCube Consulting - FZCO
                  <br /> Building A1, Dubai Digital Park, <br />
                  Dubai Silicon Oasis, <br />
                  Dubai - UAE
                </p>
              </div>
              <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                <h3 className="text-primary text-xl font-bold ">
                  United kingdom
                </h3>
                <p className="py-2 text-lg font-normal">
                  MCube Consulting Limited
                  <br /> 141 Fen Street, <br />
                  Brooklands, <br />
                  Milton Keynes - UK
                </p>
              </div>
              <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 ">
                <h3 className="text-primary text-xl font-bold ">India</h3>
                <p className="py-2 text-lg font-normal">
                  Moksha Solutions (Technology Partners)
                  <br /> Office No. 311, Sai Trade Centre, <br />
                  Railway Station Road, Aurangabad, <br />
                  Maharashtra - India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 sm:py-5">
        <div className="max-w-screen-lg mx-auto px-5 sm:px-0">
          <div className=" border-2 border-primary p-5 rounded-xl">
            <div className="text-center">
              <h2 className="text-xl 2xl:text-3xl font-semibold text-black">
                Have any questions or want to get in touch
              </h2>
              <p className="pt-2">
                Please drop in your details and one of our team members will get
                back to you soon !
              </p>
            </div>
            <div className=" pt-5 pb-10">
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmitData} autoComplete="false">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        id="contact-form-name"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Your Name (required)"
                      />
                    </div>
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Your Email Address (required)"
                      />
                    </div>

                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        autoComplete="off"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        autoComplete="off"
                        id="contact-form-subject"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-span-2 relative">
                      <textarea
                        className=" rounded-xl  w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white border border-gray-300 shadow-sm"
                        id="comment"
                        placeholder="Leave us a message (required)"
                        type="text"
                        name="query"
                        required
                        value={formData.query}
                        onChange={handleChange}
                        rows="5"
                        autoComplete="off"
                      ></textarea>
                    </div>
                    <div className="relative col-span-2 ">
                      <p className=" text-xs leading-5">
                        {" "}
                        By submitting this form, you agree to our Privacy Policy
                        and consent to the collection, storage, and processing
                        of your personal data in accordance with our terms.
                      </p>
                    </div>
                    <div className="col-span-2 mx-auto  text-right">
                      <button
                        type="submit"
                        className=" rounded-xl hover:text-white hover:bg-logored  py-2 px-4 bg-primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md"
                      >
                        {isLoader ? <div className="loader"></div> : " Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
