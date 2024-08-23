"use client";
import React from "react";
import SubHeadingLeft from "./global/SubHeadingLeft";
import Heading from "./global/Heading";

function Contactus() {
  const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  return (
    <div>
      <div className="py-10 sm:py-10">
        <div className="sm:w-10/12 2xl:w-10/12 w-full mx-auto px-5 sm:px-0">
          <div>
            <Heading title="Our Location" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-5">
            <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 max-w-[500px]">
              <h3 className="text-primary text-xl font-bold ">Dubai </h3>
              <p className="py-2 text-lg font-normal">
                MCube Consulting - FZCO
                <br /> Building A1, Dubai Digital Park, <br />
                Dubai Silicon Oasis, <br />
                Dubai - UAE
              </p>
            </div>
            <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 max-w-[500px]">
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
            <div className="bg-[#eee] pl-4 w-full py-2 border-l-4 border-secondary my-0 max-w-[500px]">
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
                <form>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        id="contact-form-name"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Your Name (required)"
                      />
                    </div>
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        id="contact-form-email"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Your Email Address (required)"
                      />
                    </div>
                    {/* <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        id="contact-form-address"
                        className=" rounded-xl  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Your Address (required)"
                      />
                    </div> */}
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        id="contact-form-phone"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        id="contact-form-subject"
                        className=" rounded-xl border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm text-base"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-span-2 relative">
                      <textarea
                        className=" rounded-xl  w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white border border-gray-300 shadow-sm"
                        id="comment"
                        placeholder="Leave us a message"
                        name="comment"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="relative col-span-2 ">
                      <label className="w-full">
                        {/* <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleChange}
                        /> */}
                        <span className=" text-xs leading-5">
                          {" "}
                          By submitting this form, you agree to our Privacy
                          Policy and consent to the collection, storage, and
                          processing of your personal data in accordance with
                          our terms.
                        </span>
                      </label>
                    </div>
                    <div className="col-span-2 mx-auto w-1/2 text-right">
                      <button
                        type="submit"
                        className=" rounded-xl hover:text-white hover:bg-orange-400  py-2 px-4 bg-primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md"
                      >
                        Submit
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
