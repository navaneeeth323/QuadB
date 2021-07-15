import React from 'react';
import './Header.css';

const Header = ({children}) => {
    return (
        <div className="header-class">
           {children}
        </div>
    )
}

export default Header;