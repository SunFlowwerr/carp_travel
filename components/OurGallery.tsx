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

const OurGallery = () => {
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
    <section className="md:text-center xl:text-left">
      <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] md:mb-[72px] xl:leading-tight xl:text-[98px]">
        Our <span className="font-medium uppercase">gallery</span>
      </h1>
      {/* <div className="lg:mx-full max-w-5xl mx-[1.5rem]"> */}
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
      {windowWidth >= 768 ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          pagination={{
            clickable: true,
            el: ".gallery-pagination",
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
            scale: 0.5,
          }}
          centeredSlides={true}
          grabCursor={true}
          className="coverflow"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SwiperSlide style={{ width: 606 }}>
            <Image
              src="/gallery-mountain.jpg"
              alt="Mountain"
              className="md:w-[463px] md:h-[370px] xl:w-[606px] xl:h-[429px]"
              style={{ width: 606 }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide style={{ width: 606 }}>
            <Image
              src="/gallery-lake.jpg"
              alt="Lake in mountains"
              className="md:w-[463px] md:h-[370px] xl:w-[606px] xl:h-[429px]"
              style={{ width: 606 }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide style={{ width: 606 }}>
            <Image
              src="/gallery-forest.jpg"
              alt="Forest in mountains"
              className="md:w-[463px] md:h-[370px] xl:w-[606px] xl:h-[429px]"
              style={{ width: 606 }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
        </Swiper>
      ) : (
        // <Swiper
        //   modules={[EffectCoverflow, Pagination, Navigation]}
        //   effect={"coverflow"}
        //   loop={true}
        //   spaceBetween={24}
        //   slidesPerView={3}
        //   pagination={{
        //     clickable: true,
        //     el: ".gallery-pagination",
        //   }}
        //   centeredSlides={true}
        //   grabCursor={true}
        //   coverflowEffect={{
        //     rotate: 0,
        //     stretch: 80,
        //     depth: -200,
        //     modifier: 1,
        //     slideShadows: false,
        //     scale: 0.5,
        //   }}
        //   navigation={{
        //     nextEl: nextButtonRef.current,
        //     prevEl: prevButtonRef.current,
        //   }}
        //   className="coverflow"
        //   // style={{ height: "294px", gap: 24 }}
        //   style={{
        //     height: 429,
        //     display: "flex",
        //     justifyContent: "space-between",
        //   }}
        // >
        //   <SwiperSlide
        //     className="w-[415px] md:h-[294px]"
        //     style={{
        //       // width: 415,
        //       // height: 294,
        //       width: 606,
        //       height: 429,
        //       transform:
        //         "translate3d(200px, 0px, -212.83px) rotateX(0deg) rotateY(0deg) scale(0.2)",
        //     }}
        //   >
        //     <Image
        //       src="/gallery-mountain.jpg"
        //       alt="Mountain"
        //       className="md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]"
        //       style={{ width: 606 }}
        //       width={607}
        //       height={429}
        //       priority
        //     ></Image>
        //   </SwiperSlide>
        //   <SwiperSlide
        //     className="flex justify-center items-center w-[415px] md:h-[294px]"
        //     style={{
        //       // width: 415,
        //       // height: 294,
        //       width: 606,
        //       transform:
        //         "translate3d(200px, 0px, -212.83px) rotateX(0deg) rotateY(0deg) scale(0.2)",
        //     }}
        //   >
        //     <Image
        //       src="/gallery-lake.jpg"
        //       alt="Lake in mountains"
        //       className="md:w-[415px] md:h-[294px] xl:w-[607px] xl:h-auto"
        //       style={{ width: "100%" }}
        //       width={607}
        //       height={429}
        //       priority
        //     ></Image>
        //   </SwiperSlide>
        //   <SwiperSlide
        //     className="flex justify-center items-center w-[415px] md:h-[294px]"
        //     style={{
        //       // width: 415,
        //       // height: 294,
        //       width: 606,
        //       transform:
        //         "translate3d(200px, 0px, -212.83px) rotateX(0deg) rotateY(0deg) scale(0.2)",
        //     }}
        //   >
        //     <Image
        //       src="/gallery-forest.jpg"
        //       alt="Forest in mountains"
        //       style={{ width: "100%" }}
        //       className="md:w-[415px] md:h-[294px] xl:w-[607px] xl:h-auto"
        //       width={607}
        //       height={429}
        //       priority
        //     ></Image>
        //   </SwiperSlide>
        // </Swiper>
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
      {/* </div> */}
    </section>
  );
};

export default OurGallery;
