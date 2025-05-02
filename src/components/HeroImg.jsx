import "./Heroimgstyle.css";
import React from 'react'
import IntroImg from "../assets/wp5320845.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg}/>
            <div className="content">
                <p>Hii,I'm a freelancer</p>
                <h1>React Developer</h1>
                <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroImg