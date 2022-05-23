import React from 'react';
import '../Services/Services.css';
import service1_img from '../Images/service1.png';
import service2_img from '../Images/service2.png';
import service3_img from '../Images/service3.png';
import service4_img from '../Images/service4.png';

import { ReadMore } from '../Sub Components/btn_components';

export default function Services() {
    return (
        <section className="container services-section" id="services">
            <h2 className="section-title center">Our Service</h2>
            <p className="paragraph center">Our team of experts delivers everything from ideation to design and engineering. <br></br>We can turn any idea sketched on the back of a napkin into a final, shipped mobile or web application.</p>

            <div className="services-block">

            

            {
                    /** 

                     <div className="service-item">
                <img src={service2_img} alt="" />

                    <p className="service-title">Ideation & Evaluation</p>
                    <p className="paragraph">No matter if you need to craft the idea for a completely new product or evaluate the quality of an already existing one - we're here to help you.</p>
                    <ReadMore link="#"/>
                </div>
                    
                     */
                }
               

                <div className="service-item">
                    <img src={service1_img} alt="" />

                    <p className="service-title"> UI/UX Design</p>
                    <p className="paragraph">Craft delightful user experiences for your digital products. Solve real problems and improve your vital business metrics through beautiful interfaces.</p>
                    <ReadMore link="#"/>
                </div>
                
                <div className="service-item">
                    <img src={service3_img} alt="" />
                    <p className="service-title">Web Development</p>
                    <p className="paragraph">Create beautiful, fast and secure websites tailored exclusively for your business goals.</p>
                    <ReadMore link="#"/>
                </div>

                
                <div className="service-item">
                    <img src={service4_img} alt="" />
                    <p className="service-title">Mobile App Development</p>
                    <p className="paragraph">Build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.</p>
                    <ReadMore link="#"/>
                </div>
            </div>
        </section>
    );
}
