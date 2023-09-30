import React, { useState } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? 'open w-screen h-screen z-10' : ''}`}>
      <div className="popup-content w-1/2 h-1/2">
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
