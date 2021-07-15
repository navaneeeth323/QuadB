import React from 'react';
import './HeaderButtons.css';

const HeaderButtons = ({children}) => {
    return(
        <div className="buttons-container">{children}</div>
    );
}

export default HeaderButtons;