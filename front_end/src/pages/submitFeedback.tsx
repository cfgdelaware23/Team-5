import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div id="submit-feedback-div">
        <div>
    <h1>Submit Feedback</h1>
        <p>Member Id:</p>
        <input
          name="inputMemberId"
          value={memberId}
          required={true}
          onChange={(e) => setMemberId(e.target.value)}
          style={{}}
        />
        <p>Product Id:</p>
        <input
          name="productIdInput"
          value={productId}
          required={true}
          onChange={(e) => setProductId(e.target.value)}
          style={{}}
        />
        <p>Feedback: </p>
        <input
          name="feedback"
          value={feedback}
          required={true}
          onChange={(e) => setFeedback(e.target.value)}
          style={{}}
        />
        <label>
            <p></p>
        Positive Feedback?:  
            <input
                name="inputEBT"
                type="checkbox"
                checked={isPositive}
                onChange={e => setIsPositive(e.target.checked)} />
        </label>
        <br></br>
        <br></br>
        <button style={{color: 'rgb(214,60,35)'}} onClick={handleSubmit}>Submit Feedback Form</button>

</div>
</div>
    </>
)
}

export default SubmitFeedback
