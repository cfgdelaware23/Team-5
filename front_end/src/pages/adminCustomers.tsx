import { useEffect, useState } from 'react'
import "../App.css"
import TransactionTable from '../components/TransactionTable'
import CustomerTable from '../components/CustomerTable'

function adminCustomers() {


    return (
        <div >
        
            <div>
            <h1>Customer Summary</h1>
            <p></p>
            </div>  
        <CustomerTable/>
            </div>
    )
}

export default adminCustomers