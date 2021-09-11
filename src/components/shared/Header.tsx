import React from 'react';

interface HeaderProps {
  showNav: boolean;
}

export const Header = (props: HeaderProps) => {
  
  const { showNav } = props;

  return (
    <header>
    <h1 className="logo">
      <a href="index.html">baker's point</a>
    </h1>
    { showNav && <nav className="navigation">
      <ul>
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="contactus.html">Contact Us</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="faq.html">FAQs</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="register.html">Register</a></li>
      </ul>
    </nav>}
    <button className="bt"><i className="material-icons">menu</i></button>
  </header>
  )
};

export default Header;
