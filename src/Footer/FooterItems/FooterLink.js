import React from 'react';
import './FooterLink.css';

const FooterLink = ({ children }) => {
  return (
    <a className="footer-link" href="#">{children}</a>
  );

}

export default FooterLink;