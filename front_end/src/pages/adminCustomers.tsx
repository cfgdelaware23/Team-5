import { useEffect, useState } from 'react'
import "../App.css"
import TransactionTable from '../components/TransactionTable'
import CustomerTable from '../components/CustomerTable'

function adminCustomers() {


    return (

        <div >
<CustomerTable/>
            </div>
    )
}

export default adminCustomers