import React, { useEffect, useState } from 'react'
import "../App.css"
import NewCustomerTable from '../components/tables/NewCustomerTable'
import CustomerCount from '../components/CustomerCount'
import SideBar from '../components/AdminSideBar'


function adminCustomers() {

    return (
        <div className='flex h-full w-full'>
            <SideBar />
            <div className='flex flex-col'>
                <h1>Customer Summary</h1>
                <CustomerCount />
                <NewCustomerTable />
            </div>
        </div>
    )
}

export default adminCustomers