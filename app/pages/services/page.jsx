import React from 'react'
import NavbarPage from './NavbarPage'
import Footer from '@/app/components/Footer/Footer'
import Services from '@/app/components/Services/Services'
import WhatWeDo from '@/app/components/What-We-Do/WhatWeDo'

const page = () => {
  return (
    <>
    <NavbarPage/>
    <Services/>
    <WhatWeDo/>
    <Footer/>
    </>
  )
}

export default page