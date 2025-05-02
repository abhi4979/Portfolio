import "./workcard.css"
import React from 'react'
import project1 from "../assets/project-management-5235092_1280.jpg"
import project2 from "../assets/projects-5235095_1280.jpg"
const workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default workcard