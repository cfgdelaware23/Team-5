import { useState } from 'react'
import '../app.css'

import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [memberId, setMemberId] = useState('')

    const navigate = useNavigate();

    function goToSignUpPage() {
        navigate("/signup")
    }

    return (

        <div >
            <h1>
                Login
            </h1>
            <div>
                <div>
                    Member ID:
                </div>

                <input 
                    name="inputMemberId"
                    value={memberId}
                    required={true}
                    onChange={e => setMemberId(e.target.value)} />
                    <button 
                        onClick={goToSignUpPage}
                        >
                            Sign Up Here!
                        </button>
            </div>
        </div>
    )
}

export default LoginPage

