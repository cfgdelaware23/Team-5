import { useState } from 'react';

function SubmitFeedback(){
    const [memberId, setMemberId] = useState('');
    const [isPositive, setIsPositive] = useState(false);
    const [feedback, setFeedback] = useState('');

    function handleSubmit () {

    }

return(
    <>
    <h1>Submit Feedback</h1>
        <input
          name="inputMemberId"
          value={memberId}
          required={true}
          onChange={(e) => setMemberId(e.target.value)}
          style={{ backgroundColor: 'grey', color: 'white' }}
        />
        <input
          name="feedback"
          value={feedback}
          required={true}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ backgroundColor: 'grey', color: 'white' }}
        />
        <label>
            Feedback positive?
            <input
                name="inputEBT"
                type="checkbox"
                checked={isPositive}
                onChange={e => setIsPositive(e.target.checked)} />
        </label>

    </>
)
}

export default SubmitFeedback