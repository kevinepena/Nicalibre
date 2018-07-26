import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className= "footer">
  <p className="footertext"> Copyright &copy; {new Date().getFullYear()}
  &nbsp;  FreeNica
    </p>
  </footer>
);

export default Footer;