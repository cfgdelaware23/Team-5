import { useEffect, useState } from 'react'
import "../App.css"
import TransactionTable from '../components/TransactionTable'
import CustomerTable from '../components/CustomerTable'
import CustomerCount from '../components/CustomerCount'
import SideBar from '../components/AdminSideBar'


function adminCustomers() {

    return (
        <div className='flex h-full w-full'>
            <SideBar />
            <div className='flex flex-col'>
                <h1>Customer Summary</h1>
                <CustomerCount />
                <CustomerTable />
            </div>
        </div>
    )
}

export default adminCustomers