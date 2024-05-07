import React from 'react'
import "../assets/styles/navbar.css"
import {Link} from "react-router-dom";
import DropdownList from './dropdownList';
import DropdownSublist from './dropdownSublist';
import { useState } from 'react';

const Navbar = () => {
  const [list, setList] = useState(false);
  const [sublist, setsubList] = useState(false);
  const handleMouseEnter = () => {
    setList(true);
  }

  const handleMouseLeave = () => {
    setList(false);
  }

  const handleSublistMouseEnter = () => {
    setsubList(true);
  }

  const handleSublistMouseLeave = () => {
    setsubList(false);
  }
  return (
    <div className='nav-bar'>
      <div className="nav-left">
        <Link to='/' className='nav-logo'>Printing</Link>
      </div>
      <div className="nav-right">
        <div className="nav-product" >
          <Link to='/products' className='nav-product-link' onMouseEnter={handleMouseEnter}>Products</Link>
          <div className={list ? 'visible' : 'hidden'} onMouseEnter={handleMouseEnter, handleSublistMouseEnter}><DropdownList /></div>
          <div className={sublist ? 'visible' : 'hidden'} onmouseleave={handleSublistMouseLeave}><DropdownSublist /></div>
        </div>
        <Link to='/price-calculator' className='nav-calculator'>Price Calculator</Link>
        <Link to='/contact' className='nav-contact'>Contact</Link>
        <Link to='/cart' className='nav-cart'>Cart</Link>
        <Link to='/profile' className='nav-profile'><div className="div-profile"></div></Link>
      </div>
    </div>
  )
}

export default Navbar;
