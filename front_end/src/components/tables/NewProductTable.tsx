import { useEffect, useState } from 'react'




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
                       <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Quantity Sold</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Discounted Price</th>
                   </tr>
                   {products && products.map(p => (
                       <tr key={p._id}>
                           <td className="border-black">{p.name}</td>
                           <td className="border-black">{p.quantitySold}</td>
                           <td className="border-black">{p.priceFull}</td>
                           <td className="border-black">{p.priceDiscount}</td>
                       </tr>
                   ))}
           </table>
       </div>
   )
}


export default NewProductTable

