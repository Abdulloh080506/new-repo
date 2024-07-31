import React from 'react'
import './navbar.css';
import Logo from '../../assets/images/Group_5.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const state = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className='nav-container'>
      <div className='nav-mini-container'>
        <div className='logo'><a href=""><img src={Logo} alt="" /></a></div>
        <div className={`links ${isOpen ? 'is-open' : ''}` }>
          <div className="mini-link">
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/plan'>Create your plan</Link>
          </div>
          <IoClose onClick={state} className='burger-menu2'/>
        </div>

          <GiHamburgerMenu onClick={state} className='burger-menu'/>


      </div>
    </div>
  )
}

export default Navbar;