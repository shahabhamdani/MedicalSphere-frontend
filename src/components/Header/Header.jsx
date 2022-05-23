import React from 'react'
import '../Header/Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAlignLeft } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from '../Images/logo.png';
import { LinkButton } from '../Sub Components/btn_components';



export default class Header extends React.Component   {



  render() {


    return (

    <header  className='nav'  >
      <div className="container">
        <div className="header-menu">
          <a href="#" > <img className='logo' src={Logo} alt="" /> </a>
          <nav className="main-nav">
            <button className="menu-bar-off" onClick={menuFunctionOff}> <FaTimes /> </button>
            <ul className="nav-list">

            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Service</a></li>
              <li><a href="#about-us" className="nav-link">About us</a></li>
              <li><a href="#pricing" className="nav-link">Pricing</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li>
              <li><a href="#portfolio" className="nav-link">Porlfolio</a></li>
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

