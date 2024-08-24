"use client";
// pages/index.jsx or components/Homepage.jsx
import { useTypewriter, Cursor } from "react-simple-typewriter";
import NewParticle from "@/components/global/NewParticle"; // Adjust the import path as per your project structure
import Link from "next/link";
import Image from "next/image";
import bannerImage from "../../../public/images/banner-1.png";
import "@/utills/tailwind-custom.css";

function Homepage() {
  const [text] = useTypewriter({
    words: [
      "Finance.",
      "Project.",
      "Procurement.",
      "Risk.",
      "Analytics.",
      "Manufacturing.",
    ],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <div className="relative ">
      <div className="absolute inset-0  ">
        <NewParticle />
      </div>
      <div className=" relative py-0 sm:py-16 2xl:py-20 custom-container">
        {/* <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2">
            <div>1</div>
            <div>2</div>
          </div>
            <h1>asdlifhadoi</h1>
        </div> */}

        <div className="relative  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2">
            <div className="mx-5 mt-10 sm:mx-0 2xl:mr-0 self-center order-first">
              <h1 className="text-white text-center sm:text-left text-3xl sm:text-7xl 2xl:text-8xl mb-0 sm:mb-4 2xl:mb-8 tracking-tight font-extrabold leading-tight">
                Streamline Like Never Before
              </h1>
              <h2 className="text-logored text-center sm:text-left text-3xl lg:text-6xl md:text-6xl 2xl:text-7xl tracking-tight font-extrabold leading-loose">
                <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#D60038"
                />
              </h2>
              {/* <div className="mt-3 sm:mt-10 2xl:mt-16">
                <Link
                  className="py-3 px-5 border border-white rounded-sm bg-transparent text-white text-lg lg:text-lg 2xl:text-2xl font-semibold hover:bg-white hover:text-[#004368] hover:border-white"
                  href=""
                  
                >
                  Start Now
                </Link>
              </div> */}
            </div>
            <div className="justify-self-end self-start pt-0 sm:pt-0 md:pt-12 lg:pt-0 2xl:pt-0 relative z-20">
              <Image src={bannerImage} alt="img" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
