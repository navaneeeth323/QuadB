import React from 'react';
import './Telegram.css';
import { FaTelegramPlane } from 'react-icons/fa';

const Telegram = () => {
  return (
      <button className="telegram-button">
          <FaTelegramPlane />
          Connect Telegram
      </button>
  );
}

export default Telegram;