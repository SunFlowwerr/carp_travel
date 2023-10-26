"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "../app/globals.css";

const Header = () => {
  const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);

  const openNavbarModal = () => {
    setIsNavbarModalOpen(true);
  };

  const closeNavbarModal = () => {
    setIsNavbarModalOpen(false);
  };

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
    <header className="flex items-center justify-between absolute top-0 left-0 w-full px-[20px] pt-[36px] md:px-[32px] md:pt-[24px] xl:px-[104px] xl:pt-[24px]">
      <Image
        src="/carp_travel_logo.svg"
        alt="Carp Travel Logo"
        width={61}
        height={34}
        priority
      />
      {windowWidth >= 768 ? (
        <Navbar></Navbar>
      ) : (
        <div>
          <button
            onClick={openNavbarModal}
            className="text-sm text-white hover:underline focus:underline cursor-pointer uppercasel"
          >
            Menu
          </button>
          {isNavbarModalOpen && (
            <div className="w-full h-screen bg-black bg-opacity-75 backdrop-blur-sm absolute top-0 left-0 flex items-center justify-center transition-all z-10">
              <button
                onClick={closeNavbarModal}
                className="text-sm text-white hover:underline focus:underline cursor-pointer uppercase absolute top-[43px] right-[20px]"
              >
                Close
              </button>
              <nav className="flex items-center justify-center flex-col gap-[48px]">
                <Link
                  activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeNavbarModal}
                  className="hover:transition-all focus:transition-all text-[18px] text-white hover:underline focus:underline cursor-pointer"
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="services-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeNavbarModal}
                  className="hover:transition-all focus:transition-all text-[18px] text-white hover:underline focus:underline cursor-pointer"
                >
                  Services
                </Link>
                <Link
                  activeClass="active"
                  to="career-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeNavbarModal}
                  className="hover:transition-all focus:transition-all text-[18px] text-white hover:underline focus:underline cursor-pointer"
                >
                  Career
                </Link>
                <Link
                  activeClass="active"
                  to="gallery-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeNavbarModal}
                  className="hover:transition-all focus:transition-all text-[18px] text-white hover:underline focus:underline cursor-pointer"
                >
                  Gallery
                </Link>
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeNavbarModal}
                  className="hover:transition-all focus:transition-all text-[18px] text-white hover:underline focus:underline cursor-pointer"
                >
                  Contacts
                </Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
