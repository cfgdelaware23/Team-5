import { useEffect, useState } from 'react'
import "../App.css"
import TransactionTable from '../components/TransactionTable'
import CustomerTable from '../components/CustomerTable'
import CustomerCount from '../components/CustomerCount'

function adminCustomers() {


    return (
        <div >
        
            <div>
            <h1>Customer Summary</h1>
            </div> 
            <CustomerCount />
        <CustomerTable/>
            </div>
    )
}

export default adminCustomers