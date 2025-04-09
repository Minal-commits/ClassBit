import React from "react";
import logoImage from "../../assets/Logo.png";
// import { useLocation } from "react-router-dom";

const Footer = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === "/";

  return (
    <div className={`w-full h-16 flex items-center justify-between bottom-0 left-0 px-0`}>
      <div className="w-28">
        <img src={logoImage} alt="Company Logo" className="w-full h-auto" />
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-600 transition">Instagram</a>
        <a href="#" className="hover:text-blue-600 transition">Facebook</a>
        <a href="#" className="hover:text-blue-600 transition">GitHub</a>
        <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
