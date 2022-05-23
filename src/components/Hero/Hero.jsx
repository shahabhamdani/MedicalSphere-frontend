import React from 'react';
import '../Header/Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAlignLeft } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from '../Images/logo.png';

import { LinkButton } from '../Sub Components/btn_components';

export default function Hero() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='hero-section' >

      <div className="container">
        <Slider {...settings} className="hero-slider">
          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">  <br/>  We Help You  <br></br> Turn Your <span> <i>Idea</i></span><br></br> Into <span><i>Design</i></span> And <span><i>Code</i></span></h1>
              <p>We build websites and mobile applications that drive sales! If you are interested in growing your business,<br></br> you have come to the right place. Let’s get you the custom built and action-oriented website your business needs.</p>
              <LinkButton button_title="Hire Ue" link="#pricing"/>
            </div>



            
          </div>
         
        </Slider>

      </div>

      </div>


      


  );
}

