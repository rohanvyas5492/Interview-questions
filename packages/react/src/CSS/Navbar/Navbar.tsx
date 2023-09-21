import React from "react";
import "./Navbar.css";

interface NavbarProps {
  // ... other props
  children?: React.ReactNode; // Make children optional
}


const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav>
      <ul>
        <li>Products</li>
        <li>Testimonials</li>
        <li>Pricing</li>
        <li>Team</li>
        <li>Contact Us</li>
      </ul>
      {children} {/* Render any children components */}
    </nav>
  );
};

export default Navbar;

