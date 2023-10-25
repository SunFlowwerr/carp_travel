"use client";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services/Services";
import Career from "@/components/Career";
import OurGallery from "@/components/Gallery";
import ContactUs from "@/components/Contacts";
import CareerMobile from "@/components/CareerForm";
import { useEffect, useState } from "react";
import "./globals.css";

const Home = () => {
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
    <div>
      <Layout background="/home_hero.jpg" id="">
        <Hero></Hero>
      </Layout>
      <Layout background="/about.jpg" id="about-section">
        <About></About>
      </Layout>
      <Services></Services>
      {windowWidth >= 768 ? (
        <Layout background="/career.jpg" id="career-section">
          <Career></Career>
        </Layout>
      ) : (
        <div>
          <Layout background="/career.jpg" id="career-section">
            <Career></Career>
          </Layout>
          <Layout background="/career.jpg" id="career-section">
            <CareerMobile></CareerMobile>
          </Layout>
        </div>
      )}
      <Layout background="/gallery.jpg" id="gallery-section">
        <OurGallery></OurGallery>
      </Layout>
      <Layout background="/contact.jpg" id="contact-section">
        <ContactUs></ContactUs>
      </Layout>
    </div>
  );
};

export default Home;
