import React from 'react';
import HeaderDashDivMain from './HeaderDashDivs/HeaderDashDivMain';
import HeaderDashDivSub from './HeaderDashDivs/HeaderDashDivSub';
import HeaderDashDivSubRed from './HeaderDashDivs/HeaderDashDivSubRed';
import './HeaderDashContainer.css';

const HeaderDashContainer = () => {
  return (
      <div className="header-dash-container">
          <HeaderDashDivSubRed text="5 Mins" percentage="0%" />
          <HeaderDashDivSub text="1 Hour" percentage="0.62%" />
          <HeaderDashDivMain mainText="Best Price to Trade" number="₹ 25,32,512" subText="Average BTC/INR net price including commission" />
          <HeaderDashDivSub text="1 Day" percentage="7.95%" />
          <HeaderDashDivSub text="7 days" percentage="10.65%" />
      </div>
  );
}

export default HeaderDashContainer;