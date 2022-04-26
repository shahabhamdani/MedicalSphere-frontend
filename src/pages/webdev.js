import React from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer.jsx"

export default function Blog() {
  return (
      <div>


      <Header />
      <div  className='container center'>

      <div className='sectionTitle'>
      <br></br>
      <br></br>

          <h1 className='section-title center'>Place your order with us on Fiverr</h1>
          <p className='paragraph center'> Fiverr is a trustworthy freelancing platform for buyers and sellers after placing the order fiverr will hold your payment for 15 days to avoid any scam from seller side which means you get 100% moneyback guarantee with this order, you can submit the details and keep complete track of your order on fiverr our team will be in contact with you via fiverr's messaging platform.</p>


      </div>
          
      <iframe src="https://www.fiverr.com/anywhere/anywhere_widget/626541ff3c07d9000f6c5feb" height='500' width='100%'  frameBorder="0" scrolling="no"> </iframe>
      </div>

  </div>


  );
}
