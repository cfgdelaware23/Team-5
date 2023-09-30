import React, { useEffect, useState } from 'react';
import '../App.css';
import UserSideBar from '../components/UserSideBar';
import Popup from './popup';

const UserProducts = () => {
  const [products, setProducts] = useState(null);
  const [showDiscounted, setShowDiscounted] = useState(false);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/products_all');
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <UserSideBar/>
    <div className="flex justify-center items-center h-full">
      <div className="w-4/5vw mb-8 sm:mx-4 lg:mx-8">
        <div className="flex justify-end mb-4">
          <label className="mr-4">
            Show Discounted Price
            <input
              type="checkbox"
              checked={showDiscounted}
              onChange={() => setShowDiscounted(!showDiscounted)}
              className="ml-2"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products &&
            products.map((p) => (
              <div key={p._id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">{p.name}</h2>
                <p className={`text-lg mb-2 ${showDiscounted ? 'line-through' : ''}`}>
                  Regular Price: ${p.priceFull}
                </p>
                {showDiscounted && (
                  <p className="text-lg mb-2">Discounted Price: ${p.priceDiscount}</p>
                )}
              </div>
            ))}
        </div>
      </div>
      <button
          // onClick={() => document.getElementById("popup").classList.toggle("open")}
          style={{
            backgroundColor: 'rgb(144,238,144)', 
            color: 'black', 
            marginTop: '25px', 
            marginLeft: "auto", 
            marginRight: "auto", 
            display: "block"}}
      >
        Get a Healthy Food!
      </button>
      {/* <Popup /> */}
    </div>
    </>
  );
};

export default UserProducts;
