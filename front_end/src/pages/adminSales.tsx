import React, { useEffect, useState } from 'react';
import '../App.css';
import AdminSideBar from '../components/AdminSideBar';

const AdminSales = () => {
    const [products, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:4000/admin/products_all');
            if (response.ok) {
            const json = await response.json();
            setProduct(json);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        };

        fetchProduct();
    }, []);


    return (
        <div className="flex justify-center items-center h-full">
            <AdminSideBar />
            <div className="w-4/5vw mb-8 sm:mx-4 lg:mx-8">
                <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                    <th className="py-2 px-6 bg-blue-500 text-white">Name</th>
                    <th className="py-2 px-6 bg-blue-500 text-white">Quantity Sold</th>
                    <th className="py-2 px-6 bg-blue-500 text-white">Price</th>
                    <th className="py-2 px-6 bg-blue-500 text-white">Discounted Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                    products.map((p) => (
                        <tr key={p._id} className="hover:bg-gray-100">
                        <td className="py-2 px-6 border-b">{p.name}</td>
                        <td className="py-2 px-6 border-b text-center">{p.quantitySold}</td>
                        <td className="py-2 px-6 border-b text-center">{p.priceFull}</td>
                        <td className="py-2 px-6 border-b text-center">{p.priceDiscount}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>  

        </div>

        
    );
};

export default AdminSales;
