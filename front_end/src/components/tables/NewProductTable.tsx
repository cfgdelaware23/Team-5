import { useEffect, useState } from 'react'


import "../../App.css"


const NewProductTable = () => {
   const [products, setProduct] = useState(null)


   useEffect(() => {
       const fetchProduct = async() => {
           const response = await fetch("http://localhost:4000/admin/products_all");
           const json = await response.json()


           if (response.ok) {
               setProduct(json)
           }
       }
       fetchProduct()
   }, [])


   return (
       <div className="grid grid-cols-2 w-4/5vw h-full mb-8 sm:mx-4 lg:mx-8 gap-4">
           <table className="shadow-lg bg-white">
                   <tr>
                       <th className="py-2 px-6 bg-red-700 text-white">Name</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Quantity Sold</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Price</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Discounted Price</th>
                   </tr>
                   {products && products.map(p => (
                       <tr key={p._id}>
                           <td className="py-2 px-6 border-b">{p.name}</td>
                           <td className="py-2 px-6 border-b text-center">{p.quantitySold}</td>
                           <td className="py-2 px-6 border-b text-center">{p.priceFull}</td>
                           <td className="py-2 px-6 border-b text-center">{p.priceDiscount}</td>
                       </tr>
                   ))}
           </table>
       </div>
   )
}


export default NewProductTable

