import React, { useState } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
