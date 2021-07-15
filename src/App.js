import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import HeaderLogo from './Header/HeaderLogo';
import HeaderConnect from './Header/HeaderConnect';
import HeaderButtons from './Header/HeaderButtons';
import CustomButton from './Header/Buttons/CustomButton';
import ButtonTextContent1 from './Header/Buttons/ButtonTextContent1';
import ButtonTextContent2 from './Header/Buttons/ButtonTextContent2';
import Timer from './Header/Connect/Timer';
import Telegram from './Header/Connect/Telegram';
import { FaToggleOn } from 'react-icons/fa';
import HeaderDashContainer from './HeaderDash/HeaderDashContainer';
import Image from './Image/Image';
import TableContainer from './Table/TableContainer';
import FooterContainer from './Footer/FooterContainer';



function App() {
  const [buttonBadge1, setButtonBadge1] = useState(false);
  const [buttonBadge2, setButtonBadge2] = useState(false);

  const badgeChangeHandler1 = () => {
    setButtonBadge1(prev => !prev);
  }

  const badgeChangeHandler2 = () => {
    setButtonBadge2(prev => !prev);
  }

  return (
    <div className="app">
      <Header>
        <HeaderLogo />
        <HeaderButtons>
          <CustomButton onClick={badgeChangeHandler1}>INR</CustomButton>
          {buttonBadge1 && <ButtonTextContent1></ButtonTextContent1>}
          <CustomButton onClick={badgeChangeHandler2}>BTC</CustomButton>
          {buttonBadge2 && <ButtonTextContent2></ButtonTextContent2>}
          <CustomButton>BUY BTC</CustomButton>
        </HeaderButtons>
        <HeaderConnect>
          <Timer />
          <Telegram />
          <FaToggleOn />
        </HeaderConnect>
      </Header>
      <HeaderDashContainer />
      <Image src='/images/cryptonite.PNG' />
      <TableContainer />
      <Image src='/images/ftx.png'/>
      <FooterContainer />
    </div>

  );
}

export default App;
