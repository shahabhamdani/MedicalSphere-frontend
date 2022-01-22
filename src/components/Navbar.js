import { Link } from 'gatsby';
import React from 'react';
import About from '../pages/about';

export default function Navbar() {
  return (

    <nav>
        <h1>IDEADAC</h1>
        <div className='links'>
            <Link  activeClassName="navlink-active" to='/'>Home</Link>
            <Link activeClassName="navlink-active"
 to='/about'>About Us</Link>
            <Link   activeClassName="navlink-active"to='/portfolio'>Portfolio</Link>
            <Link  activeClassName="navlink-active" to='/services'>Services</Link>
            <Link   activeClassName="navlink-active" to='/contact'>Contact us</Link>
            <Link  activeClassName="navlink-active" to='/blog'>Blogs</Link>
        </div>
    </nav>
  );
}
