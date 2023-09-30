import React, { useEffect, useState } from 'react';
import '../App.css';

const AdminFeedback = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/feedback_all');
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-4/5vw mb-8 sm:mx-4 lg:mx-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-6 bg-blue-500 text-white">Product Name</th>
              <th className="py-2 px-6 bg-blue-500 text-white">Feedback Description</th>
              <th className="py-2 px-6 bg-blue-500 text-white">Positive Feedback?</th>
              <th className="py-2 px-6 bg-blue-500 text-white">Created At</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-100">
                  <td className="py-2 px-6 border-b text-center">{p.productId|| ' - '}</td>
                  <td className="py-2 px-6 border-b text-center">{p.feedbackDescription || ' - '}</td>
                  <td className="py-2 px-6 border-b text-center">{p.feedbackPositive ? 'Yes' : ' - '}</td>
                  <td className="py-2 px-6 border-b text-center">{p.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeedback;

