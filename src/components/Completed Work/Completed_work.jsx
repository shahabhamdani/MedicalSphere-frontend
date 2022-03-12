import React from "react";
import "../Completed Work/Completed-work.css";
import achivment1 from "../Images/achivment1.png";
import achivment2 from "../Images/achivment2.png";
import achivment3 from "../Images/achivment3.png";
import achivment4 from "../Images/achivment4.png";

export default function Completed_work() {
    return (
        <section className="completed-work-sec">
            <div className="container completed-work-body">
                <div className="completed-work-text">
                    <h2 className="section-title">
                        Over 100+ Completed work & Still Counting
                    </h2>
                    <p className="paragraph">
                        Choosing the right software development company translates into
                        continuity and scalability of your product. At iDeadac, we write
                        code that will continue to work for you when your app grows and more
                        customers use it. You will be taken care of at every stage of your
                        growth: from idea and concept, through design, development and
                        maintenance.
                    </p>
                    <p className="paragraph">
                    
                    </p>
                </div>
                <div className="achivment-wrapper">
                    <div className="achivment achivment1">
                        <img src={achivment1} alt="" />
                        <h3>100+</h3>
                        <p>Projects Done</p>
                    </div>
                    <div className="achivment achivment2">
                        <img src={achivment2} alt="" />
                        <h3>95%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="achivment achivment3">
                        <img src={achivment3} alt="" />
                        <h3>20+</h3>
                        <p>Active Projects</p>
                    </div>
                    <div className="achivment achivment4">
                        <img src={achivment4} alt="" />
                        <h3>5+</h3>
                        <p>Years Exerience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
