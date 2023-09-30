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
    const customerCount = data.length
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CustomerTable