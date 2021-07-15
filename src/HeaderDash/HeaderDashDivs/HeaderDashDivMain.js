import React from 'react';
import './HeaderDashDivMain.css';

const HeaderDashDivMain = ({mainText,number,subText}) => {
 return (
     <div className="div-main">
         <h3 className="main-text">{mainText}</h3>
         <h1 className="number">{number}</h1>
         <p className="subtext">{subText}</p>
     </div>
 );
}

export default HeaderDashDivMain;