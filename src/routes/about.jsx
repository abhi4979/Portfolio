import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import AboutContent from '../components/AboutContent'
const about = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="ABOUT" text="I'm a friendly front-end developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default about