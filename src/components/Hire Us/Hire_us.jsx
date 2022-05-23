import React from 'react';
import '../Hire Us/Hire-us.css';
import Hireusimg from '../Images/Hire-us-img.png';
import { LinkButton } from '../Sub Components/btn_components';

export default function Hire_us() {
    return (
        <section className="Hire-us-section" id="about-us">
            <div className="container Hire-us-body">
                <div className="Hire-us-text">
                    <h2 style={{color: "white"}}  className="section-title">Why You Hire Us?</h2>
                    <p  style={{color: "white"}} className="paragraph">At iDeadac, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.
                    </p>
                    <p style={{color: "white"}} className="paragraph">
                    We are a team of developers, business analysts, and designers experienced in software development projects.
                    </p>

                    <LinkButton button_title="Read More" link="#" />
                </div>

            </div>
        </section>
    );
}
