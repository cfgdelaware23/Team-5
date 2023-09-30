import React from 'react';
import popup from 'react'

import { useEffect, useState } from 'react'

function Popup({text, closePopup}) {
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
    <div className="popup-container">
     <div className="popup-body">
      <h1>hey there</h1>
      <button onClick={closePopup}>Close X</button>
     </div>
    </div>
  );
}

export default Popup;
