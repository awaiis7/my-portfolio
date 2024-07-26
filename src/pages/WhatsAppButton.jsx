import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './WhatsAppButton.css';
import { SiWhatsapp } from "react-icons/si";
const WhatsAppButton = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
    window.open("https://wa.me/03011589269", "_blank");
  };
  return (
    <Button
      onClick={handleClick}
      className={`whatsapp-button ${isActive ? 'active' : ''}`}
    >
      <SiWhatsapp />
    </Button>
  );
};
export default WhatsAppButton;