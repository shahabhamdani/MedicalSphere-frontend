import React, { Component }  from 'react';

import packageImg from '../Images/service1.png';
import service3 from '../Images/service3.png';
import service4 from '../Images/service4.png';



export const PricingData = [
    {
        image : <img src={packageImg} alt="" />,
        type : "Web Desigining",
        price : "$100",
        timePeriod : "7 Days",
        packageDesc : [
            "Website Design",
            "Mobile Application Design",
            "UX/UI",
            "Responsive Web App UI UX ",
            "Source PSD/XD/Figma layered files",
            "Working Prototype"
        ],
        link : "#"
    },
    {
        image : <img src={service3} alt="" />,
        type : "Web Development",
        price : "$100",
        timePeriod : "7 days",
        packageDesc : [
            "Complete Business Website",
            "Domain & Hosting",
            "CMS installation",
            "Landing page",
            "Contact form",
            "Social media",

        ],
        link : "#"
    },
    {
        image : <img src={service4} alt="" />,
        type : "Mobile Application",
        price : "$500",
        timePeriod : "1 Month",
        packageDesc : [
            "Functional App",
            "2 Operating systems",
            "App Icon",
            "Splash Screen",
            "Ad Network Integration",
            "Include Source Code"
        ],
        link : "#"
    }
];