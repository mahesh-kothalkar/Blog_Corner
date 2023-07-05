import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
      Made By Mahesh using<b>React.js</b> and <b>MySql</b>.
      </span>
    </footer>
  );
};

export default Footer;