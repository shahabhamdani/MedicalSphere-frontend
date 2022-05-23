import React from 'react';
import '../Footer/Footer.css';
import {LinkButton} from '../Sub Components/btn_components';
import Logo from '../Images/logo.png';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export  default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <FooterCta />
                <div className="container footer-body">
                    <div className="footer-sec">
                        <img src={Logo} alt="" />
                        <p>We believe that each project is a vital milestone in our journey.<br></br> So, we proactively consult, design, develop & scale robust web, mobile & custom software solutions, that promotes innovation and the best outcome!
                        </p>


                         {/**
                        
                          <div className="footer-social">
                            <a href="#"> <FaFacebookF /> </a>
                            <a href="#"> <FaInstagram /> </a>
                            <a href="#"> <FaTwitter /> </a>
                        </div>
                         */}


                      
                    </div>

                    <div className="footer-sec">
                        <h4>Links</h4>
                        
                        
                        
                         {/**
                        
                        <ul>

                       
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolios</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        
                         */}
                         
                         
                    </div>

                    <div className="footer-sec contact-icon">
                        <h4>Contact Us</h4>
                       
                       
                        {/* <div className="footer-icon-part">
                            <FaPhone />
                           <a href="tel: +00000000">00000000</a>
                        </div>

                        */ }
                        <div className="footer-icon-part">
                            <FaEnvelope />
                            <a href="mailto: Ideadac@outlook.com">Ideadac@outlook.com</a>
                        </div>
                        <div className="footer-icon-part">
                            <FaMapMarkerAlt />
                            <span>Islamabad, Pakistan</span>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className="copyright">
                <p>Copyright © 2022 <span>iDeadac</span>. All rights reserved.</p>
            </div>
        </div>
    );
}


export function FooterCta() {
    return (
        <div className='footer-cta-section'>
            <div className="footer-cta-body">
                <div className="cta-text">
                    <h3>Have Any Project in Mind ?</h3>
                    <p>We deliver value to hundreds of leading businesses, which have derived strategic benefits from our transformative solutions. Let’s speak about your project..</p>
                </div>
                <div className="white-link-btn">
                    <LinkButton button_title='hire us' link='#pricing' />
                </div>
            </div>
        </div>
    );
}

