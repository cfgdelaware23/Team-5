import React, { useEffect, useState } from 'react'
import "../App.css"
import NewCustomerTable from '../components/tables/NewCustomerTable'
import CustomerCount from '../components/CustomerCount'
import SideBar from '../components/AdminSideBar'



const adminCustomers = () => {
    const [customers, setCustomers] = useState(null)

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


    return (
        <div className='flex h-full w-full'>
            <SideBar />
            <div className='flex flex-col'>
                <div className="left-0 px-4 py-4">
                    {customers != null &&
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2 text-center">Total Customers: {customers.length}</h2>
                        </div>
                    }
                </div>
                <div>
                    <NewCustomerTable />

                </div>
            </div>


        </div>
    )
}

export default adminCustomers