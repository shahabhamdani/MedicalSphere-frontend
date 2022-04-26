import React from 'react';
import '../Header/Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAlignLeft } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from '../Images/logo.png';
import banner1 from '../Images/banner_1.png';
import banner2 from '../Images/banner_02.png';
import banner3 from '../Images/banner_03.png';
import { LinkButton } from '../Sub Components/btn_components';

export default function Hero() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='hero-section' >

      <div className="container">
        <Slider {...settings} className="hero-slider">
          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">  <span>iDeadac</span> <br/>  Idea Design And Code </h1>
              <h5>Turn your idea into groundbreaking product</h5>
              <p>We build websites and mobile applications that drive sales! If you are interested in growing your business, you have come to the right place. Let’s get you the custom built and action-oriented website your business needs.</p>
              <LinkButton button_title="Hire Ue" link="#pricing"/>
            </div>
            <img src={banner1} className="slider-img" alt="" />
          </div>
          


{/**  

 <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <LinkButton button_title="Hire Me" link="#"/>
            </div>
            <img src={banner2} className="slider-img" alt="" />
          </div>

          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <LinkButton button_title="Hire Me" link="#"/>
            </div>
            <img src={banner3} className="slider-img" alt="" />
          </div>
 */}

         
        </Slider>

      </div>

      </div>


      


  );
}

