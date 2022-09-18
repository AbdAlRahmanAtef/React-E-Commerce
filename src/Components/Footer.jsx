import React from "react";
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>Copyright <FaRegCopyright/> {new Date().getFullYear()} All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
