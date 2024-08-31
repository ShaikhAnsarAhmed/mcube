import React from "react";

function LandinBannaer(props) {
  return (
    <div
      className="py-[40px] md:py-[190px] w-full md:h-64 h-28 sm:h-44 bg-cover bg-center"
      style={{ backgroundImage: "url('/banneroldo.jpg')" }}
    >
      <p className=" font-extrabold max-w-xs sm:max-w-full text-2xl sm:text-5xl mx-auto items-center text-white justify-center text-center">
        {" "}
        {props.title}
      </p>
      {props.subtitle ? (
        <p className="py-2 text-sm sm:text-3xl  items-center text-gray-300 justify-center text-center">
          Oracle Cloud Implementations with MCube Consulting
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default LandinBannaer;
