import { useEffect, useState } from 'react'


import "../../App.css"


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
       <div className="grid grid-cols-2 w-4/5vw h-full mb-8 sm:mx-4 lg:mx-8 gap-4">
           <table className="shadow-lg bg-white">
                   <tr>
                       <th className="py-2 px-6 bg-red-700 text-white">Customer ID</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Product ID</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Positive Feedback</th>
                       <th className="py-2 px-6 bg-red-700 text-white">Feedback Description</th>
                   </tr>
                   {feedback && feedback.map(f => (
                       <tr key={f._id}>
                           <td className="py-2 px-6 border-b">{f.customerId}</td>
                           <td className="py-2 px-6 border-b text-center">{f.productId}</td>
                           <td className="py-2 px-6 border-b text-center">{f.feedbackPositive}</td>
                           <td className="py-2 px-6 border-b text-center">{f.feedbackDescription}</td>
                       </tr>
                   ))}
           </table>
       </div>
   )
}


export default NewFeedbackTable;