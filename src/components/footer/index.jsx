  import React from 'react';
import '../footer/style.css';
import FooterLogo from '../../assets/images/Group 5 (1).png';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-mini-container">
            <div className="footer-logo"><a href=""><img src={FooterLogo} alt="" /></a></div>
            <div className="footer-links">
                <Link to='/'>HOME</Link>
                <Link to='/about-us'>ABOUT US</Link>
                <Link to='/plan'>CREATE YOUR PLAN</Link>
            </div>
            <div className="footer-icons">
                <AiFillFacebook className='icons'/>
                <FaTwitter className='icons'/>
                <FaInstagram className='icons'/>
            </div>
        </div>
    </div>
  )
}

export default Footer;