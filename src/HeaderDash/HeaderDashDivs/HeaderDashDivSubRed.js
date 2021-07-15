import React from 'react';
import './HeaderDashDivSubRed.css';

const HeaderDashDivSubRed = ({text,percentage}) => {
    return (
        <div className="container">
            <h1 className="percentage1">{percentage}</h1>
            <p className="text">{text}</p>
        </div>
    );
}

export default HeaderDashDivSubRed;