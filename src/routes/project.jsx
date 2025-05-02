import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import Workcard from '../components/workcard'
const project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimage2 heading="PROJECTS" text="Hey This is my react project"/>
    <Workcard/>
    <Footer/>
    </div>
  )
}

export default project