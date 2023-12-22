"use client";
import AboutUs from "./components/AboutUs";
import Design from "./components/Design";
import Footer from "./components/Footer";
import GoogleLoc from "./components/GoogleLoc";
import NavbarPage from "./components/NavbarPage";
import Services from "./components/Services";
import Values from "./components/Values";
import WhatWeDo from "./components/WhatWeDo";
import WhyToChoose from "./components/WhyToChoose";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Navbar + Carousel */}
      <NavbarPage />
      {/* About Us */}
      <AboutUs />
      {/* Values */}
      <Values />
      {/* Design */}
      <Design />
      {/* Services */}
      <Services />
      {/* WhatWeDo */}
      <WhatWeDo />
      {/* Why to choose Us */}
      <WhyToChoose />
      {/* Goodleloc */}
      <GoogleLoc />
      {/* Footer */}
      <Footer />
    </>
  );
}
