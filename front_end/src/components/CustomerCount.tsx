import { useEffect, useState } from 'react'
import "../App.css"

function CustomerTable() {
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
    const length = customers.length

    return (
        <div>
            <p>{length}</p>
        </div>

    )
}

export default CustomerTable