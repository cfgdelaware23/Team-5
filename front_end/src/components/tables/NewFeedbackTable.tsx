import { useEffect, useState } from 'react'


import "../App.css"


const NewFeedbackTable = () => {
   const [feedback, setFeedback] = useState(null)


   useEffect(() => {
       const fetchFeedback = async() => {
           const response = await fetch("http://localhost:4000/admin/feedback_all");
           const json = await response.json()


           if (response.ok) {
               setFeedback(json)
           }
       }
       fetchFeedback()
   }, [])


   return (
       <div>
           <table className="shadow-lg bg-white">
                   <tr>
                       <th className="bg-blue-100 border text-left px-8 py-4">Customer ID</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Product ID</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Positive Feedback</th>
                       <th className="bg-blue-100 border text-left px-8 py-4">Feedback Description</th>
                   </tr>
                   {feedback && feedback.map(f => (
                       <tr key={f._id}>
                           <td className="border-black">{f.customerId}</td>
                           <td className="border-black">{f.productId}</td>
                           <td className="border-black">{f.feedbackPositive}</td>
                           <td className="border-black">{f.feedbackDescription}</td>
                       </tr>
                   ))}
           </table>
       </div>
   )
}


export default NewFeedbackTable;