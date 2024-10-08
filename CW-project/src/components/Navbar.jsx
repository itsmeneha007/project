

import React, { useState } from "react";
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div>
        <h1>SkinStore</h1>
        <p>pert of the <b>LOOKFANTASTIC</b> group</p>
        </div>
        <input type="text" class="input" placeholder="Search for a product and brands..." />
        <ul>
          <li><a href="#account">Account</a></li>
          <li><a href="cart">Cart</a></li>
          
        </ul>
      </div>
      <hr />

      
      <div>
        <ul class="navbar-2">
          <li><a href="#discover">Discover Dermstore</a></li>
          <li><a href="#brands">Brands</a></li>
          <li><a href="#sale">Sale</a></li>
          <li><a href="#skincare">Skin Care</a></li>
          <li><a href="#sunscreem">Sunscreem</a></li>
          <li><a href="#makeup">Makeup</a></li>
          <li><a href="#haircare">Hair Care</a></li>
          <li><a href="#tools">Tools & Devices</a></li>
          <li><a href="#fragrance">Fragrence</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
      <p>We're evolving. SkinStore is becomig DermStore, continue your skin health journey with the premire skin care authority.</p>
      <h3>Last Chance : Hair care up to 25% of + 2x points on select brands. Ends 10/3. SHOP AT DERMSTORE</h3>
      
    </nav>
    
  );
};

export default Navbar;