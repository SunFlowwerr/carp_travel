"use client";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./custom-swiper-styles.css";

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
      className="max-w-full flex flex-row font-thin text-white mb-6 gap-24"
    >
      <SwiperSlide
        className="max-w-full flex flex-row "
        style={{ display: "flex" }}
      >
        <Layout background="/services.jpg" height={779}>
          <section
            id="services-section"
            className="p-6 flex flex-col relative"
            style={{ height: 619 }}
          >
            <div className="flex flex-row" style={{ gap: 162 }}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tighter mb-6">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="leading-tight font-thin uppercase tracking-normal mb-6"
                style={{ color: "rgb(255, 255, 255, 0.2)", fontSize: 98 }}
              >
                <span className="text-white">01/</span>
                05
              </h2>
            </div>
            <div className="flex flex-row">
              <Image
                src="/atvs.jpg"
                alt="ATVs traveling"
                width={607}
                height={429}
                priority
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 320,
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 12 }}>Feel the adrenaline rush</p>
                <p
                  className="text-white font-extralight text-lg tracking-normal text-justify leading-6 self-end"
                  style={{ width: 293 }}
                >
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
        className="max-w-full flex flex-row "
        style={{ display: "flex" }}
      >
        <Layout background="/bg-services-rock-climbing.jpg" height={779}>
          <section
            id="services-section"
            className="p-6 flex flex-col relative"
            style={{ height: 619 }}
          >
            <div className="flex flex-row" style={{ gap: 162 }}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tighter mb-6">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="leading-tight font-thin uppercase tracking-normal mb-6"
                style={{ color: "rgb(255, 255, 255, 0.2)", fontSize: 98 }}
              >
                <span className="text-white">02/</span>
                05
              </h2>
            </div>
            <div className="flex flex-row">
              <Image
                src="/rock-climbing.jpg"
                alt="Rock climbing"
                width={607}
                height={429}
                priority
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 320,
                  justifyContent: "flex-end",
                }}
              >
                <p style={{ position: "absolute", top: 217, fontSize: 12 }}>
                  Destroy your limitations
                </p>
                <p
                  className="text-white font-extralight text-lg text-justify leading-6 self-end"
                  style={{ width: 293 }}
                >
                  Overcome the peaks of the Carpathians in a unique way -
                  climbing. Make your own way to the heights and find inner
                  peace in the embrace of the mighty rocks.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout background="/bg-services-ballooning.jpg" height={779}>
          <section
            id="services-section"
            className="p-6 flex flex-col relative"
            style={{ height: 619 }}
          >
            <div className="flex flex-row" style={{ gap: 162 }}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tighter mb-6">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="leading-tight font-thin uppercase tracking-normal mb-6"
                style={{ color: "rgb(255, 255, 255, 0.2)", fontSize: 98 }}
              >
                <span className="text-white">03/</span>
                05
              </h2>
            </div>
            <div className="flex flex-row">
              <Image
                src="/ballooning.jpg"
                alt="Hot air ballooning"
                width={607}
                height={429}
                priority
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 320,
                  justifyContent: "flex-end",
                }}
              >
                <p style={{ position: "absolute", top: 255, fontSize: 12 }}>
                  Get inspired
                </p>
                <p
                  className="text-white font-extralight text-lg text-justify leading-6 self-end"
                  style={{ width: 293 }}
                >
                  Feel Zen over the mountain peaks! Hot air ballooning gives you
                  incredible impressions and panoramas of the Carpathians that
                  seem endless.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout background="/bg-services-skydiving.jpg" height={779}>
          <section
            id="services-section"
            className="p-6 flex flex-col relative"
            style={{ height: 619 }}
          >
            <div className="flex flex-row" style={{ gap: 162 }}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tighter mb-6">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="leading-tight font-thin uppercase tracking-normal mb-6"
                style={{ color: "rgb(255, 255, 255, 0.2)", fontSize: 98 }}
              >
                <span className="text-white">04/</span>
                05
              </h2>
            </div>
            <div className="flex flex-row">
              <Image
                src="/skydiving.jpg"
                alt="Skydiving"
                width={607}
                height={429}
                priority
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 320,
                  justifyContent: "flex-end",
                }}
              >
                <p style={{ position: "absolute", top: 295, fontSize: 12 }}>
                  Overcome your fears
                </p>
                <p
                  className="text-white font-extralight text-lg text-justify leading-6 self-end"
                  style={{ width: 293 }}
                >
                  Fly in the sky over the Carpathians! Experienced instructors
                  will help you realize your dream of free flight. Remember the
                  incredible emotions and panoramas from a bird's eye view
                  forever.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      </SwiperSlide>
      <SwiperSlide>
        <Layout background="/bg-services-rafting.jpg" height={779}>
          <section
            id="services-section"
            className="p-6 flex flex-col relative"
            style={{ height: 619 }}
          >
            <div className="flex flex-row" style={{ gap: 162 }}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tighter mb-6">
                We <span className="font-medium uppercase">offer</span>
              </h1>
              <h2
                className="leading-tight font-thin uppercase tracking-normal mb-6"
                style={{ color: "rgb(255, 255, 255, 0.2)", fontSize: 98 }}
              >
                <span className="text-white">05/</span>
                05
              </h2>
            </div>
            <div className="flex flex-row">
              <Image
                src="/rafting.jpg"
                alt="Rafting"
                width={607}
                height={429}
                priority
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 320,
                  justifyContent: "flex-end",
                }}
              >
                <p style={{ position: "absolute", top: 345, fontSize: 12 }}>
                  Trust the flow
                </p>
                <p
                  className="text-white font-extralight text-lg text-justify leading-6 self-end"
                  style={{ width: 293 }}
                >
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
