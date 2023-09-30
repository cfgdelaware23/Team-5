import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const productUpdate = () => {
    let urlParams = useParams();
    let productId = urlParams.id;

    console.log(productId);

    const [name, setName] = useState('');
    const [quantitySold, setQuantitySold] = useState(0);
    const [priceFull, setPriceFull] = useState(0);
    const [priceDiscount, setPriceDiscount] = useState(0);

    axios.get(`http://localhost:4000/products/get_product/${productId}`, {
    }).then(function (response) {
        setName(response.data.name);
        // setQuantitySold(response.data.quantitySold);
        document.querySelector("#quantity-id").value = response.data.quantitySold;
        // setPriceFull(response.data.priceFull);
        document.querySelector("#full-price-id").value = response.data.priceFull;
        // setPriceDiscount(response.data.priceDiscount);
        document.querySelector("#discount-price-id").value = response.data.priceDiscount;

    }).catch(function (error) {
        console.log(error);
    })

    function handleSubmit (e) {
        // Get the values from the form and then submit it
        let nameVal = document.querySelector("#name-id").value;
        let quantityVal = document.querySelector("#quantity-id").value;
        let fullPriceVal = document.querySelector("#full-price-id").value;
        let discountPriceVal = document.querySelector("#discount-price-id").value;

        axios.put(`http://localhost:4000/products/update_product/${productId}`, {
            name: nameVal,
            quantitySold: quantityVal,
            priceFull: fullPriceVal,
            priceDiscount: discountPriceVal,
        }).then(function (response) {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        })

        window.location.reload();
    }

    return (
        <>
        <div className='flex h-full w-full'>
            <AdminSideBar />
            <div className='flex flex-col'>
                    <div className="left-0 px-4 py-4">
        <div className='flex flex-col w-screen h-screen justify-center align-middle text-center'>
            <h1 className='font-extrabold text-4xl m-4 uppercase'>Product</h1>
            <form className='flex flex-col align-middle items-center font-bold text-left'>
                <label>Name</label>
                <input id="name-id" className="border-2 border-black-500"
                    name="inputName"
                    defaultValue={name}
                    required={true}
                    placeholder='Name' />

                <label>Quantity Sold</label>
                <input id="quantity-id" className="border-2 border-black-500"
                    name="quantitySold"
                    defaultValue={quantitySold}
                    placeholder='Quantity Sold' />

                <label>Full Price</label>
                <input id="full-price-id" className="border-2 border-black-500"
                    name="priceFull"
                    defaultValue={priceFull}
                    placeholder='Full Price' />

                <label>Discount Price</label>
                <input id="discount-price-id" className="border-2 border-black-500"
                    name="priceDiscount"
                    defaultValue={priceDiscount}
                    placeholder='Discount Price' />

            <div className="justify-center">
                <button className='bg-blue-700 text-white mx-1 font-medium' type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            </form>
        </div>

                    </div>
                    <div>

                </div>
                </div>


            </div>
        

        </>
    )


}

export default productUpdate
