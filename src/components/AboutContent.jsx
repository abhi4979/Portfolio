import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import project2 from "../assets/projects-5235095_1280.jpg"
import project1 from "../assets/project-management-5235092_1280.jpg"
import React from 'react'

const AboutContent = () => {
  return (
     <div className="about">
        <div className="left">
            <h1>vhbhjv</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <Link to={"/contact"}>
            <button className="btn">CONTACT</button>
            </Link>
            </div>
        <div className="right">
            <div className="image-container">
            <div className="image-stack top">
                <img src={project1} alt="" className="img" />
            </div>
            <div className="image-stack bottom">
                <img src={project2} alt="" className="img" />
            </div>
            </div>
        </div>
     </div>
  )
}

export default AboutContent