import { useState } from 'react';
import axios from 'axios';

function SubmitFeedback(){
    const [memberId, setMemberId] = useState('');
    const [isPositive, setIsPositive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [productId, setProductId] = useState('');

    function handleSubmit () {
        // console.log(memberId, isPositive, feedback);
        axios.post("http://localhost:4000/customer/feedback_create", {
            feedbackPositive: isPositive,
            feedbackDescription: feedback,
            customerId: memberId,
            productId: productId,
        }).then(function (response) {
            // Success: reload page
            // window.location.reload();
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        })

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
        <p>Positive Feedback?: </p>
        <label>
            Feedback positive?
            <input
                name="inputEBT"
                type="checkbox"
                checked={isPositive}
                onChange={e => setIsPositive(e.target.checked)} />
        </label>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Submit Feedback Form</button>

</div>
</div>
    </>
)
}

export default SubmitFeedback