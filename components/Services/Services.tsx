"use client";
import Layout from "../Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./services-swiper-styles.css";

const Services = () => {
  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {
      let title = "";
      if (index === 0) {
        title = "ATVs Traveling";
      } else if (index === 1) {
        title = "Rock climbing";
      } else if (index === 2) {
        title = "Hot air ballooning";
      } else if (index === 3) {
        title = "Skydiving";
      } else if (index === 4) {
        title = "Rafting";
      }

      return `
        <span class= ${className}>
         <span>${title}</span>
        </span>
        `;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[EffectFade, Pagination]}
      effect={"fade"}
      className="max-w-full h-auto flex flex-row font-thin text-white mb-6 gap-24"
    >
      <SwiperSlide
        className="max-w-full flex flex-row h-auto"
        style={{ display: "flex" }}
      >
        <Layout background="/services.jpg" id="services-section">
          <section className="flex flex-col relative xl:h-[619px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:mb-[36px] xl:justify-start xl:gap-[162px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="text-[43px] leading-tight font-thin uppercase tracking-normal self-end mb-[16px] text-top md:text-[67px] md:mb-[0px] xl:mb-6 xl:text-[98px]"
                style={{ color: "rgb(255, 255, 255, 0.2)" }}
              >
                <span className="text-white">01/</span>
                05
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src="/atvs.jpg"
                alt="ATVs traveling"
                className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                width={607}
                height={429}
                priority
              />
              <div className="flex flex-col justify-between md:ml-[19px] md:justify-end md:items-end xl:w-full">
                <p className="text-[12px] w-full mt-[12px] text-right md:text-start md:mt-[0px] xl:w-[293px]">
                  Feel the adrenaline rush
                </p>
                <p className="text-white font-extralight text-[14px] tracking-tight text-justify leading-6 w-full mt-[224px] md:leading-5 md:tracking-normal md:text[13px] md:mt-[34px] xl:self-end xl:w-[293px] xl:text-[18px] xl:leading-6">
                  Join exciting rafting expeditions on the waterways of the
                  Carpathians. Go through challenging waterways and overcome
                  gusty waves, feel the adrenaline, and enjoy the incredible
                  views of the surrounding mountains.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide
        className="max-w-full flex flex-row h-auto"
        style={{ display: "flex" }}
      >
        <Layout
          background="/bg-services-rock-climbing.jpg"
          id="services-section"
        >
          <section className="flex flex-col relative xl:h-[619px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:mb-[36px] xl:justify-start xl:gap-[162px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="text-[43px] leading-tight font-thin uppercase tracking-normal self-end mb-[16px] text-top md:text-[67px] md:mb-[0px] xl:mb-6 xl:text-[98px]"
                style={{ color: "rgb(255, 255, 255, 0.2)" }}
              >
                <span className="text-white">02/</span>
                05
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src="/rock-climbing.jpg"
                alt="Rock climbing"
                className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                width={607}
                height={429}
                priority
              />
              <div className="flex flex-col justify-between md:ml-[19px] md:justify-end md:items-end xl:w-full">
                <p className="text-[12px] w-full mt-[12px] text-right md:text-start md:mt-[0px] xl:w-[293px]">
                  Destroy your limitations
                </p>
                <p className="text-white font-extralight text-[14px] tracking-tight text-justify leading-6 w-full mt-[224px] md:leading-5 md:tracking-normal md:text[13px] md:mt-[34px] xl:self-end xl:w-[293px] xl:text-[18px] xl:leading-6">
                  Overcome the peaks of the Carpathians in a unique way -
                  climbing. Make your own way to the heights and find inner
                  peace in the embrace of the mighty rocks.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide
        className="max-w-full flex flex-row h-auto"
        style={{ display: "flex" }}
      >
        <Layout background="/bg-services-ballooning.jpg" id="services-section">
          <section className="flex flex-col relative xl:h-[619px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:mb-[36px] xl:justify-start xl:gap-[162px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="text-[43px] leading-tight font-thin uppercase tracking-normal self-end mb-[16px] text-top md:text-[67px] md:mb-[0px] xl:mb-6 xl:text-[98px]"
                style={{ color: "rgb(255, 255, 255, 0.2)" }}
              >
                <span className="text-white">03/</span>
                05
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src="/ballooning.jpg"
                alt="Hot air ballooning"
                className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                width={607}
                height={429}
                priority
              />
              <div className="flex flex-col justify-between md:ml-[19px] md:justify-end md:items-end xl:w-full">
                <p className="text-[12px] w-full mt-[12px] text-right md:text-start md:mt-[0px] xl:w-[293px]">
                  Get inspired
                </p>
                <p className="text-white font-extralight text-[14px] tracking-tight text-justify leading-6 w-full mt-[224px] md:leading-5 md:tracking-normal md:text[13px] md:mt-[34px] xl:self-end xl:w-[293px] xl:text-[18px] xl:leading-6">
                  Feel Zen over the mountain peaks! Hot air ballooning gives you
                  incredible impressions and panoramas of the Carpathians that
                  seem endless.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide
        className="max-w-full flex flex-row h-auto"
        style={{ display: "flex" }}
      >
        <Layout background="/bg-services-skydiving.jpg" id="services-section">
          <section className="flex flex-col relative xl:h-[619px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:mb-[36px] xl:justify-start xl:gap-[162px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="text-[43px] leading-tight font-thin uppercase tracking-normal self-end mb-[16px] text-top md:text-[67px] md:mb-[0px] xl:mb-6 xl:text-[98px]"
                style={{ color: "rgb(255, 255, 255, 0.2)" }}
              >
                <span className="text-white">04/</span>
                05
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src="/skydiving.jpg"
                alt="Skydiving"
                className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                width={607}
                height={429}
                priority
              />
              <div className="flex flex-col justify-between md:ml-[19px] md:justify-end md:items-end xl:w-full">
                <p className="text-[12px] w-full mt-[12px] text-right md:text-start md:mt-[0px] xl:w-[293px]">
                  Overcome your fears
                </p>
                <p className="text-white font-extralight text-[14px] tracking-tight text-justify leading-6 w-full mt-[224px] md:leading-5 md:tracking-normal md:text[13px] md:mt-[34px] xl:self-end xl:w-[293px] xl:text-[18px] xl:leading-6">
                  Fly in the sky over the Carpathians! Experienced instructors
                  will help you realize your dream of free flight. Remember the
                  incredible emotions and panoramas from a bird&apos;s eye view
                  forever.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide
        className="max-w-full flex flex-row h-auto"
        style={{ display: "flex" }}
      >
        <Layout background="/bg-services-rafting.jpg" id="services-section">
          <section className="flex flex-col relative xl:h-[619px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:mb-[36px] xl:justify-start xl:gap-[162px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="text-[43px] leading-tight font-thin uppercase tracking-normal self-end mb-[16px] text-top md:text-[67px] md:mb-[0px] xl:mb-6 xl:text-[98px]"
                style={{ color: "rgb(255, 255, 255, 0.2)" }}
              >
                <span className="text-white">05/</span>
                05
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src="/rafting.jpg"
                alt="Rafting"
                className="md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                width={607}
                height={429}
                priority
              />
              <div className="flex flex-col justify-between md:ml-[19px] md:justify-end md:items-end xl:w-full">
                <p className="text-[12px] w-full mt-[12px] text-right md:text-start md:mt-[0px] xl:w-[293px]">
                  Trust the flow
                </p>
                <p className="text-white font-extralight text-[14px] tracking-tight text-justify leading-6 w-full mt-[224px] md:leading-5 md:tracking-normal md:text[13px] md:mt-[34px] xl:self-end xl:w-[293px] xl:text-[18px] xl:leading-6">
                  Join exciting rafting expeditions on the waterways of the
                  Carpathians. Go through challenging waterways and overcome
                  gusty waves, feel the adrenaline, and enjoy the incredible
                  views of the surrounding mountains.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
    </Swiper>
  );
};

export default Services;
