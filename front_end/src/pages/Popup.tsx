import React from 'react';

import { useEffect, useState } from 'react'

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async() => {
        const response = await fetch("http://localhost:4000/customer/get_random_product");
        const json = await response.json()
        if (response.ok) {
            setProduct(json)
        }
    }
    fetchProduct()
}, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? 'open z-10 h-screen w-screen' : ''}`}>
      <div className="popup-content">
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
