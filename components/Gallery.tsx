"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "./gallery-swiper.css";
import React, { useRef } from "react";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="md:text-center xl:text-left relative">
      <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] md:mb-[72px] xl:leading-tight xl:text-[98px]">
        Our <span className="font-medium uppercase">gallery</span>
      </h1>
      {windowWidth >= 768 ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: 0,
            depth: 100,
            slideShadows: false,
            scale: 0.5,
            stretch: 5,
          }}
          pagination={{
            clickable: false,
            el: ".pagination-el",
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          className="mySwiper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: windowWidth >= 1280 ? "429px" : "294px",
          }}
        >
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "429px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-mountain.jpg"
              alt="Mountain"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-lake.jpg"
              alt="Lake in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-forest.jpg"
              alt="Forest in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "429px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-mountain.jpg"
              alt="Mountain"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "429px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-lake.jpg"
              alt="Lake in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/gallery-forest.jpg"
              alt="Forest in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
        </Swiper>
      ) : (
        <ul className="mt-[24px] flex flex-col gap-[24px]">
          <li>
            <Image
              src="/gallery-mountain.jpg"
              alt="Mountain"
              className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
          <li>
            <Image
              src="/gallery-lake.jpg"
              alt="Lake in mountains"
              className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
          <li>
            <Image
              src="/gallery-forest.jpg"
              alt="Forest in mountains"
              className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
        </ul>
      )}
      {windowWidth >= 768 && (
        <div className="flex gap-[449px] w-full justify-center h-100% absolute bottom-0 z-10 xl:gap-[651px]">
          <button className="prevBtn text-[33px] leading-[56px] font-thin text-white uppercase tracking-tighter">
            Back
          </button>
          <button className="nextBtn text-[33px] leading-[56px] font-thin text-white uppercase tracking-normal">
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
