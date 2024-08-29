import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 w-full h-[30%] bg-black flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-10">
          <div>Acme store</div>
          <div className="flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="">About</Link>
            <Link to="">Terms and Conditions</Link>
            <Link to="">Shipping & Return Policy</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">FAQ</Link>
          </div>
        </div>
        <div>Deploy</div>
      </div>
      <div>d</div>
    </footer>
  );
};

export default Footer;
