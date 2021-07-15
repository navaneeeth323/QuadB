import React from 'react';
import './FooterContainer.css';
import FooterDiv1 from './FooterItems/FooterDiv1';
import FooterDiv2 from './FooterItems/FooterDiv2';
import FooterText from './FooterItems/FooterText';
import FooterLink from './FooterItems/FooterLink';
import FooterButton from './FooterItems/FooterButton';

const FooterContainer = () => {
    return (
        <div className="footer-container">
            <FooterDiv1>
                <FooterText>
                        <div>Copyright © 2019</div>
                        <div>HodlInfo.com</div>
                        <div>Developed By
                            <span style={{ color: "#5DC7C2", cursor: "pointer" }}>QuadBTech</span>
                        </div>
                    </FooterText>
                <FooterLink>Support</FooterLink>
            </FooterDiv1>
            <FooterDiv2>
                <FooterButton />
            </FooterDiv2>
        </div>
    );
}

export default FooterContainer;