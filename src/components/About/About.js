import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';


class About extends Component {
  render() {
    return (
        <div className="About">
          <div className="about-navback"></div>
          <div className="about-main-cont">
            <div className="about-main-lefttop">
              <p>
                Lawrence Hartman
                Education: BS Electrical Engineering (minor in mathematics), Southern Illinois University at
                Edwardsville
                Mr. Hartman is an experienced senior engineering manager adept in technical leadership and
                project management. He has a proven track record conceiving and implementing innovative ideas
                to solve customer needs. He is currently using his system development and management skills
                toward commercial product development. He is collaborating with Innovation Collective, a
                technology start up hub located in Coeur d’Alene Idaho, on bringing his product ideas to market. He
                retired in August of 2015 from Principle Engineering and Program Management in the Intelligence,
                Surveillance, and Reconnaissance business area at Northrop Grumman Mission Systems’
                Electromagnetic Systems Laboratory (ESL). He has been the hardware architect leading a wide
                range of advanced technology programs from airborne signal processing systems to high-speed
                networking exploitation systems. His efforts included Technical manager on a number of IR&amp;D
                projects that demonstrated a significant advancement in the communication area and were
                recognized with numerous awards including the Select Roll of Honor from Mission System. Mr.
                Hartman worked for 5 years in the telecommunication field for TTC, a test equipment company
                located in Maryland. TTC merged with Wandel and Goltermann to become ACTERNA. He
                architected and then led the first distributed team that comprised designers located in multiple
                states and in England. This work resulted in product is known as SmartClass, a modular low cost
                instrument that is used for phone line, DSL and fiber optic testing and became one of the most
                successful products for the company that is now named JDSU.
              </p>
            </div>
            <div className="about-main-rightbottom">
              <Link to='/login'><button>Admin Login</button></Link>
            </div>
          </div>
        </div>
    );
  }
}

export default About;