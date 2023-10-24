"use client";
import css from "./page.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Services from "@/components/Services/Services";
import OurGallery from "@/components/OurGallery";
import ContactUs from "@/components/ContactUs";
import { Link } from "react-scroll";
import "./globals.css";

const Home = () => {
  return (
    <div>
      <Layout background="/home_hero.jpg" id="">
        <Header></Header>
        <section className="flex flex-col w-full justify-between mt-[26px] md:flex-row md:relative xl:flex-row xl:mt-0">
          <div className="w-full mt-[24px] md:w-[426px]">
            <div className="w-[280px] md:w-[426px] md:h-[243px] xl:w-[646px] xl:h-[357px]">
              <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] md:leading-tight xl:leading-tight xl:text-[98px]">
                <span className="font-medium">Uncover</span> Carpathian’s
                Secrets
              </h1>
            </div>
            <p className="flex mt-[24px] text-[10px] w-[157px] xl:text-base text-white font-extralight md:text-[14px] md:w-[262px] md:mt-[68px] xl:mt-[148px] xl:text-[16px] xl:w-[608px] xl:mt-[148px]">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="h-[52px] flex flex-col order-first mt-[36px] md:h-auto md:w-[221px] md:absolute md:top-0 md:right-0 md:mt-[30px] xl:w-[305px]">
            <h2 className="text-[37px] leading-none font-thin text-white uppercase tracking-wide text-right md:text-[67px] xl:text-[98px]">
              <span className="font-medium">7</span>
              Days
            </h2>
            <span className="text-[12px] text-white uppercase font-light tracking-[9px] text-right md:tracking-[22px] md:text-[14px] xl:text-[16px] xl:tracking-[36px]">
              journey
            </span>
          </div>
          <div className="flex flex-col items-center md:items-right md:self-end md:mt-[144px]">
            <p className="w-full mt-[24px] text-[14px] leading-6 text-white font-extralight text-justify md:w-[230px] md:text-[16px] md:mt-[15px] xl:w-[294px] xl:mt-[181px] xl:text-[18px]">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center justify-between w-[280px] h-[53px] mt-[28px] uppercase text-white font-bold cursor-pointer bg-white bg-opacity-5 hover:bg-opacity-10 focus:bg-opacity-10 md:w-[230px] md:h-[50px] text-[18px] xl:w-[293px] xl:h-[71px] xl:text-[32px]"
            >
              <Image
                src="/button_left.svg"
                alt="Button left"
                className="h-[60px] w-[30px] md:h-[55px] md:w-[30px] xl:w-[44px] xl:h-[71px]"
                width={44}
                height={71}
                priority
              />
              Join now
              <Image
                src="/button_right.svg"
                alt="Button left"
                className="h-[60px] w-[30px] md:h-[55px] md:w-[30px] xl:w-[44px] xl:h-[71px]"
                width={44}
                height={71}
                priority
              />
            </Link>
          </div>
        </section>
      </Layout>
      <Layout background="/about.jpg" id="about-section">
        <About></About>
      </Layout>
      <Services></Services>
      {/* <Layout background="/gallery.jpg" id="gallery-section">
        <OurGallery></OurGallery>
      </Layout> */}
      <Layout background="/contact.jpg" id="contact-section">
        <ContactUs></ContactUs>
      </Layout>
    </div>
  );
};

export default Home;
