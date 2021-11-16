import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-transparent flex justify-center items-center h-16 text-gray-500 text-xs" >
      (c) 2021 Angeal Cheong - All rights reserved.{" "}
      <Link to={{ pathname: "https://github.com/" }} target="_blank"></Link>
    </div>
  );
};

export default Footer;