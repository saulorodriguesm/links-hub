import React from "react";
import Instagram from "../icons/instagram.png";
import WhatsApp from "../icons/whatsapp.png";
import Menu from "../icons/menu.png";

function Links() {
  return (
    <div>
      <div className="linkshub-links">
        <button className="linkshub-links--button">
          <img src={Instagram} />
          <span> Instagram</span>
        </button>
        <button className="linkshub-links--button">
          <img src={WhatsApp} />
          <span> WhatsApp</span>
        </button>
        <button className="linkshub-links--button">
          <img src={Menu} />
          <span> Cardápio </span>
        </button>
      </div>
    </div>
  );
}

export default Links;
