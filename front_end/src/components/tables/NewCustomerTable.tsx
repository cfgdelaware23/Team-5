import React, { useEffect, useState } from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom';

const NewCustomerTable = () => {
    const [customers, setCustomers] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch("http://localhost:4000/admin/customers_all");
            const json = await response.json()


            if (response.ok) {
                setCustomers(json)
            }
        }
        fetchCustomers()
    }, [])

    const handleEditClick = (customerId) => {
        navigate(`/edit/customer/${customerId}`);
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-4/5vw mb-8 sm:mx-4 lg:mx-8">
                <table className="min-w-full bg-white border border-gray-300 absolute">
                    <tr style={{ backgroundColor: 'rgb(214, 60, 35)' }}>
                        <th className="py-2 px-6 bg-red-700 text-white">Name</th>
                        <th className="py-2 px-6 bg-red-700 text-white">Qualify for Personalized Pricing</th>
                        <th className="py-2 px-6 bg-red-700 text-white">Address</th>
                        <th className="py-2 px-6 bg-red-700 text-white">Actions</th>
                    </tr>
                    {customers && customers.map(c => (
                        <tr key={c._id}>
                            <td className="py-2 px-6 border-b">{c.name}</td>
                            <td className="py-2 px-6 border-b text-center">{c.qualify ? "yes" : "no"}</td>
                            <td className="py-2 px-6 border-b text-center">{c.address}</td>
                            <td className="py-2 px-6 border-b text-center">
                                <button
                                    onClick={() => handleEditClick(c._id)}
                                    className="text-red-700 underline"
                                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>

    )
}


export default NewCustomerTable

