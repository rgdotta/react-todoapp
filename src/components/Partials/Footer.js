import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <p className="copyright">Copyright © {year}</p>;
};

export default Footer;
