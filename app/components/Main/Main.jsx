import React from 'react'
import NavbarPage from '../Header-Navbar/NavbarPage'
import AboutUs from '../About-Us/AboutUs'
import Values from '../Values-Bg-Img/Values'
import Design from '../Design/Design'
import Services from '../Services/Services'
import WhatWeDo from '../What-We-Do/WhatWeDo'
import WhyToChoose from '../Why-To-Choose-Us/WhyToChoose'
import GoogleLoc from '../Google-Form/GoogleLoc'
import Footer from '../Footer/Footer'

const Main = () => {
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
  )
}

export default Main