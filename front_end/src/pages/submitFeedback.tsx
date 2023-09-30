import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../components/UserSideBar';

function SubmitFeedback(){
    const [memberId, setMemberId] = useState('');
    const [isPositive, setIsPositive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [productId, setProductId] = useState('');
    const navigate = useNavigate();

    function handleSubmit () {
        axios.post("http://localhost:4000/customer/feedback_create", {
            feedbackPositive: isPositive,
            feedbackDescription: feedback,
            customerId: memberId,
            productId: productId,
        }).then(function (response) {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        })

        navigate("/customer/products");
    }
    return(
        <>
            <UserSideBar/>
            <div className='flex flex-col w-screen h-full justify-center items-top text-center'>
                <form id="submit-feedback-div" className='flex flex-col align-middle items-center font-bold text-left w-full p-4'>
                    <h1 className='font-extrabold text-4xl m-4 uppercase' >Submit Feedback</h1>
                        <label>Member Id:</label>
                            <input
                            name="inputMemberId"
                            value={memberId}
                            required={true}
                            onChange={(e) => setMemberId(e.target.value)}
                            className="border-2 border-black-500"
                            />
                    
                        <label>Product ID:</label>
                        <input
                            value={productId}
                            required={true}
                            onChange={(e) => setProductId(e.target.value)}
                            className="border-2 border-black-500"
                            />

                        <label>Feedback:</label>
                        <input
                            name="feedback"
                            value={feedback}
                            required={true}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="border-2 border-black-500"
                            />
                        <div className='mx-2'>
                            <label className="font-medium"
                            style={{marginTop: "10px", marginBottom: "10px"}}
                            >Positive experience?</label>
                            <input
                                name="inputEBT"
                                type="checkbox"
                                checked={isPositive}
                                onChange={e => setIsPositive(e.target.checked)}
                                style={{marginLeft: "10px"}}
                                />
                            <br></br>
                            <button className='bg-slate-700 text-white mx-1 font-medium hover:bg-slate-600' type="button" onClick={handleSubmit}>Submit Feedback Form</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default SubmitFeedback