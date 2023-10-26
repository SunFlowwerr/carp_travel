"use client";
import React from "react";
import { Link } from "react-scroll";
import "../app/globals.css";

const Navbar = () => {
  return (
    <nav className="flex gap-x-14">
      <Link
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:transition-all focus:transition-all text-sm text-white hover:underline focus:underline cursor-pointer"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="services-section"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:transition-all focus:transition-all text-sm text-white hover:underline focus:underline cursor-pointer"
      >
        Services
      </Link>
      <Link
        activeClass="active"
        to="career-section"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:transition-all focus:transition-all text-sm text-white hover:underline focus:underline cursor-pointer"
      >
        Career
      </Link>
      <Link
        activeClass="active"
        to="gallery-section"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:transition-all focus:transition-all text-sm text-white hover:underline focus:underline cursor-pointer"
      >
        Gallery
      </Link>
      <Link
        activeClass="active"
        to="contact-section"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:transition-all focus:transition-all text-sm text-white hover:underline focus:underline cursor-pointer"
      >
        Contacts
      </Link>
    </nav>
  );
};

export default Navbar;
