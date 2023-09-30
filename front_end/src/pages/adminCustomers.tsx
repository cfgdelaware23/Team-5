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
            <div>
            <CustomerCount />
            </div>
            <div>
                <CustomerTable/>
            </div>
            </div>
    )
}

export default adminCustomers