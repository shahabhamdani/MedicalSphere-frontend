import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer.jsx"
import Services from "../components/Services/Services";
import HireUs from '../components/Hire Us/Hire_us';
import Completedwork from '../components/Completed Work/Completed_work';
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact us/Contact";
import Pricing from '../components/Pricing/Pricing';
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <div>

<Header/>
      <Hero />
      <Services />
      <HireUs />
      <Completedwork/>
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
