"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
// No need to import styles.css as we will use Tailwind CSS

export default function Corosal() {
  const corosalDAta = [
    {
      title: "Android",
      imageUrl: "/langs/android.png",
    },
    {
      title: "Angular",
      imageUrl: "/langs/Angular.png",
    },
    {
      title: ".Net ",
      imageUrl: "/langs/dot-net-framework.png",
    },
    {
      title: "Flutter ",
      imageUrl: "/langs/flutter.png",
    },

    {
      title: "Java ",
      imageUrl: "/langs/java.png",
    },
    {
      title: "Javascript ",
      imageUrl: "/langs/js.png",
    },

    {
      title: "Kotlin",
      imageUrl: "/langs/kotlin.png",
    },
    {
      title: "Laravel",
      imageUrl: "/langs/laravel.png",
    },

    {
      title: "Next Js",
      imageUrl: "/langs/nextjs.png",
    },
    {
      title: "Node Js",
      imageUrl: "/langs/node.png",
    },
    {
      title: "PHP",
      imageUrl: "/langs/php.png",
    },
    {
      title: "React",
      imageUrl: "/langs/React.png",
    },

    {
      title: "Vue Js",
      imageUrl: "/langs/vue.png",
    },
    {
      title: "Python",
      imageUrl: "/langs/python.png",
    },
    {
      title: "Mongo DB",
      imageUrl: "/langs/mongo.png",
    },
    {
      title: "My Sql",
      imageUrl: "/langs/sql.png",
    },
    {
      title: "Postgress",
      imageUrl: "/langs/postgress.png",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        className="mySwiper w-full h-full"
        modules={[Autoplay, Navigation]}
      >
        {corosalDAta.map((item, index) => (
          <SwiperSlide
            key={index}
            className="p-5  rounded-xl h-full text-center text-18 bg-white flex flex-col items-center transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center mb-2">
              <Image
                src={item.imageUrl}
                width={100}
                height={100}
                alt={`${item.title} Logo`}
              />
            </div>
            <p>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
