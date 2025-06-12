import React from "react"
import "./About.css"
import seriesData from "./seriesData.json"
import Navbar from "../Navbar/Navbar";
const AboutUs = () => {
  return (
      <>
      {/* <Navbar/> */}
          <div className="about-container">
              <div className="about-header">
                  <h1 className="main-heading">About Us</h1>
              </div>
              <div className="about-grid">
                  {seriesData.map((item, index) => (
                      <div key={index} className="about-box">
                            <h3 className="about-title">{item.title}</h3>
                            {Array.isArray(item.para) ? (
                                <ul className="about-text" >
                                    {item.para.map((point, index) => (
                                    <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                ):(<p className="about-text">{item.para}</p>
                            )}                         
                      </div>
                  ))}
              </div>
          </div>
      </>
  );
};


export default AboutUs