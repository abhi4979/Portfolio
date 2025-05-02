import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>Bangladesh</p>
                    </div>
                   </div>
                        <div className="phone">
                            <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        122-3444-233
                        </h4>
                        </div>
                        <div className="email">
                            <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        122-3444-233
                        </h4>
                        </div>
                    </div>
              
            <div className="right">
                <h4>About the Company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quo nisi, illum minima nobis voluptatum voluptatem earum fugiat praesentium laboriosam.</p>
                <div className="social">
                <FaFacebook color={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter color={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin color={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Footer