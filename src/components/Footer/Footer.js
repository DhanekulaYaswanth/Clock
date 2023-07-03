import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="FooterContainer">
                <div className="socialmedia">
                        <Link to="https://twitter.com/Yaswanth9802" target="blank"><FontAwesomeIcon icon={faTwitter} className="uparrow twitter"></FontAwesomeIcon></Link>
                        <Link to="https://www.instagram.com/_yaswanth_011/" target="blank"><FontAwesomeIcon icon={faInstagram} className="uparrow instagram"></FontAwesomeIcon></Link>
                        <Link to="https://www.linkedin.com/in/dhanekula-yaswanth" target="blank"><FontAwesomeIcon icon={faLinkedin} className="uparrow linkedin"></FontAwesomeIcon></Link>
                        <Link to="https://github.com/DhanekulaYaswanth" target="blank"><FontAwesomeIcon icon={faGithub} className="uparrow github"></FontAwesomeIcon></Link>
                </div>
                <hr/>
                <p className="footer_text"> Copyright © 2023 Yaswanth Dhanekula. All Rights Reserved</p>
        </div>
    )
}

export default Footer;