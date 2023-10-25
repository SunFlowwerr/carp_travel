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

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <section className="md:text-center xl:text-left relative">
      <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] md:mb-[72px] xl:leading-tight xl:text-[98px]">
        Our <span className="font-medium uppercase">gallery</span>
      </h1>
      {windowWidth >= 768 ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: false,
            el: ".pagination-el",
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          modules={[Pagination, Navigation, EffectCoverflow]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: -200,
            modifier: 1,
            slideShadows: false,
            scale: 0.25,
          }}
          centeredSlides={true}
          grabCursor={true}
          className="coverflow, mySwiper"
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
        <div className="flex gap-[449px] w-full justify-center h-100% absolute bottom-0 z-10">
          <button
            ref={prevButtonRef}
            className="text-[33px] leading-[56px] font-thin text-white uppercase tracking-tighter"
          >
            Back
          </button>
          <button
            ref={nextButtonRef}
            className="text-[33px] leading-[56px] font-thin text-white uppercase tracking-normal"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
