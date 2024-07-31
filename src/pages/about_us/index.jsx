import React from "react";
import "../about_us/style.css";
import AboutBanneer from "./banner2";
import AboutElement from "./aboutelement1/aboutelement";
import AboutElement2 from "./aboutelement2";
import AboutElement3 from "./aboutelement3";

export const About_Us = () => {
  return (
    <div>
      <AboutBanneer/>
      <AboutElement/>
      <AboutElement2/>
      <AboutElement3/>
    </div>
  );
};

export default About_Us;
