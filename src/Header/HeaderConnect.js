import React from 'react';
import './HeaderConnect.css';

const HeaderConnect = ({children}) => {
    return (
        <div className="header-connect">
            {children}
        </div>
    );
}

export default HeaderConnect;