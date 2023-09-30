import { useEffect, useState } from 'react'
import "../App.css"

function TransactionTable() {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((realdata) => {
                console.log(realdata)
                setData(realdata.products)
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <table className="shadow-lg bg-white">
                    <tr>
                        <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Brand</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Image</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Rating</th>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border-black">{item.customerId}</td>
                            <td className="border-black">{item.feedbackPositive}</td>
                            <td className="border-black">{item.feedbackDescription}</td>
                            <td className="border-black">{item.productId}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

export default TransactionTable