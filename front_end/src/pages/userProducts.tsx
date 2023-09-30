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
      <div className='flex w-screen justify-center align-center m-5'>
        <button
            // onClick={() => document.getElementById("popup").classList.toggle("open")}
            className='bg-green-600 w-1/6 text-center'
        >
          Get a Healthy Food!
        </button>
        {/* <Popup /> */}
        <div className="flex justify-center items-center h-full">
          <div className="w-4/5vw sm:mx-4 lg:mx-8">
            <div className="flex justify-center mb-4 bg-slate-700/25 lg:w-1/4 rounded">
              <label style={{display: 'inline-flex', padding: '0.6em 1.2em'}} className="mx-4 font-bold">Show Discounted Price</label>
                <input 
                  type="checkbox"
                  checked={showDiscounted}
                  onChange={() => setShowDiscounted(!showDiscounted)}
                  className="mx-2"
                  />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
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
    </>
  );
};

export default UserProducts;
