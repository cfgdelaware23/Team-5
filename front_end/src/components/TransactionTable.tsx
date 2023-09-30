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
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.brand}</td>
                            <td>
                                <img src={item.thumbnail} alt="" height={100} />
                            </td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable