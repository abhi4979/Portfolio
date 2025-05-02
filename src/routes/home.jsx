import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/work'
const home = () => {
  return (
    <div>
    <Navbar />
    <HeroImg />
    <Work></Work>
    <Footer />
    </div>
  
  )
}

export default home