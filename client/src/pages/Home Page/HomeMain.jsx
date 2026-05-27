import React from "react";
import HeaderHome from './HeaderHome';
import ServiceGrid from './Section1';
//import SjghNetwork from './Section8';

import Section3 from './Section3';
import ConvenienceServices from './Section4';
import PatientFeedback from './Section5';
import Section6 from "./Section6";
import LatestUpdates from "./Section7"
import SjghNetwork from './Section8';



function Home(){
    return(
        <>
        <HeaderHome/>
        <ServiceGrid />
        <Section3 />
        <ConvenienceServices/>
        <PatientFeedback/>
        <Section6/>
        <LatestUpdates/>
        <SjghNetwork/>
        </>
    );
};

export default Home;