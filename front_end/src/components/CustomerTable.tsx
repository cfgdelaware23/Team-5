import { useEffect, useState } from 'react'
import "../App.css"

function CustomerTable() {
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
        <div className="grid grid-cols-2 w-4/5vw h-full mb-8 sm:mx-4 lg:mx-8 gap-4">

            <table className="shadow-lg bg-white w-4/5vw">
                    <tr>
                        <th className="bg-blue-100 border-2 text-left px-8 py-4">Name</th>
                        <th className="bg-blue-100 border-2 text-left px-8 py-4">Qualify</th>
                        <th className="bg-blue-100 border-2 text-left px-8 py-4">Zipcode</th>
                    </tr>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td className="border-black">{user.name}</td>
                            <td className="border-black">{user.qualify}</td>
                            <td className="border-black">{user.Zipcode}</td>                        
                        </tr>
                    ))}
            </table>
        </div>
    )
}

export default CustomerTable