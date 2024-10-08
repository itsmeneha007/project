import React from 'react';
import './Footer.css'; 


function Footer() {
  return (
    <div className="footer">
      <ul>
        <h3><b>Help & Information</b></h3>
        <li><a href="#customer">Customer & Service</a></li>
        <li><a href="#delivery">Delivery Information</a></li>
        <li><a href="#return">Return & Refunds</a></li>
        <li><a href="#help">Help Center</a></li>
        <li><a href="#track">Track my order</a></li>
        <li><a href="#accessibility">Accessibility</a></li>
        <li><a href="#cookie">Cookie Settings</a></li>
      </ul>

      <ul>
        <h3><b>About SkinStore</b></h3>
        <li><a href="#">About us</a></li>
        <li><a href="#">Brand Directory</a></li>
        <li><a href="#">Coupon Codes</a></li>
        <li><a href="#">Refer A Friend</a></li>
        <li><a href="#">Join SkinStore Experts</a></li>
      </ul>

      <ul>
        <h3><b>Legal</b></h3>
        <li><a href="#cookie">Cookie Information</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms & Conditions</a></li>
        <li><a href="#modern">Modern Slavery Statements</a></li>
      </ul>
      <ul>
        <h3><b>How to contact us</b></h3>
        <li><a href="#message">Message us</a></li>
        <li><a href="#free">Free beauty Consultations</a></li>
      </ul>
    </div>
  );
}

export default Footer;