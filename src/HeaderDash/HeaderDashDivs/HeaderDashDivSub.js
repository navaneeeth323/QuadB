import React from 'react';
import './HeaderDashDivSub.css';

const HeaderDashDivSub = ({text,percentage}) => {
  return (
      <div className="header-sub">
          <h1 className="percentage">{percentage}</h1>
          <p className="text">{text}</p>
      </div>
  );
}

export default HeaderDashDivSub;