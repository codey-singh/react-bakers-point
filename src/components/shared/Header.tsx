import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  showNav: boolean;
}

export const Header = (props: HeaderProps) => {
  const { showNav } = props;

  return (
    <header>
      <h1 className="logo">
        <Link to="/">baker's point</Link>
      </h1>
      {showNav && (
        <nav className="navigation">
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/account/login">Login</Link>
            </li>
            <li>
              <Link to="/account/register">Register</Link>
            </li>
          </ul>
        </nav>
      )}
      <button className="bt">
        <i className="material-icons">menu</i>
      </button>
    </header>
  );
};
