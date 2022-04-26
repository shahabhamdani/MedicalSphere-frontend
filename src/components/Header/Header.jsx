import React, { useEffect, useState } from 'react'
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



export default class Header extends React.Component   {

  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };

  render() {


    return (

    <header  className={` ${this.state.show  && 'nav'}`}  >
      <div className="container">
        <div className="header-menu">
          <img src={Logo} alt="" />
          <nav className="main-nav">
            <button className="menu-bar-off" onClick={menuFunctionOff}> <FaTimes /> </button>
            <ul className="nav-list">
              <li><a href="#about-us" className="nav-link">About us</a></li>
              <li><a href="#services" className="nav-link">Service</a></li>
              <li><a href="#portfolio" className="nav-link">Porlfolio</a></li>
              <li><a href="#pricing" className="nav-link">Pricing</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li>
                <li><a href="#contact-us" className="nav-link">Contact us</a></li>
            </ul>
            <LinkButton button_title="Hire Us" link="#pricing"/>
          </nav>
          
          <button className="menu-bar" onClick={menuFunction}> <FaAlignLeft/> </button>
        </div>
      </div>
    </header>    
    
    );


  }

}


const menuFunction = () => {
  var x = document.querySelector(".main-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const menuFunctionOff = () => {
  var x = document.querySelector(".main-nav");
  x.style.display = "none";
}

