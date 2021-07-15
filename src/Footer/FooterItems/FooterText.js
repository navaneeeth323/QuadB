import React from 'react';
import './FooterText.css';

const FooterText = ({children}) => {
   return (
       <div className="footer-text">{children}</div>
   );
}

export default FooterText;