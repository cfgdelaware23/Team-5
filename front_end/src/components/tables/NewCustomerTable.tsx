import { useEffect, useState } from 'react'


import "../../App.css"


const NewCustomerTable = () => {
   const [customers, setCustomers] = useState(null)


   useEffect(() => {
       const fetchCustomers = async() => {
           const response = await fetch("http://localhost:4000/admin/customers_all");
           const json = await response.json()


           if (response.ok) {
               setCustomers(json)
           }
       }
       fetchCustomers()
   }, [])


   return (
       <div className="grid grid-cols-2 w-4/5vw h-full mb-8 sm:mx-4 lg:mx-8 gap-4">
           <table className="shadow-lg bg-white">
                   <tr>
                       <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Qualify for Personalized Pricing</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Address</th>
                   </tr>
                   {customers && customers.map(c => (
                       <tr key={c._id}>
                           <td className="border-black">{c.name}</td>
                           <td className="border-black">{c.qualify}</td>
                           <td className="border-black">{c.address}</td>
                       </tr>
                   ))}
           </table>
       </div>
   )
}


export default NewCustomerTable

