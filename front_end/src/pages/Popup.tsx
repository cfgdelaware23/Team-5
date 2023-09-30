import React from 'react';
import popup from 'react'

import { useEffect, useState } from 'react'

function Popup({ closePopup}) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async() => {
        const response = await fetch("http://localhost:4000/products/get_random_product");
        const json = await response.json()
        if (response.ok) {
            console.log(product)
            setProduct(json)
        }
        console.log(product)
        console.log("test")
        {product &&
          product.map((p) => (
            console.log(p)
          ))}
    }
    fetchProduct()
}, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
     <div className="m-4">
        {product &&
          product.map((p) => (
            <div key={p._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            </div>
          ))}
      </div>
      <button onClick={closePopup}>Close X</button>
     </div>
  );
}

export default Popup;
