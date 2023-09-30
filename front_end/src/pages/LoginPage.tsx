import { useState } from 'react'
import '../app.css'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginPage() {
    const [memberId, setMemberId] = useState('')
    
    const [loaded, setLoaded] = useState(false);
    const [qualify, setQualify] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [name, setName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    const navigate = useNavigate();

    function goToSignUpPage() {
        navigate("/signup")
    }

    // interface dataResponse {
    //     qualify: boolean,
    //     isAdmin: boolean,
    //     name: string,
    //     zipCode: string,
    //     createdAt: string,
    // }

    function handleSubmit() {
        axios.get(`http://localhost:4000/customer/retrieve_customer/${memberId}`, {
        }).then(function (response) {
            // response holds data
            setQualify(response.data.qualify);
            setIsAdmin(response.data.isAdmin);
            setName(response.data.name);
            setZipCode(response.data.address);
            setCreatedAt(response.data.createdAt);
            console.log(response.data);
            setLoaded(true);

        }).catch(function (error) {
            console.log(error);
        })
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

                <input className="border-2 border-black-500"
                    name="inputMemberId"
                    value={memberId}
                    required={true}
                    onChange={e => setMemberId(e.target.value)}
                    color="white"

                     />
                    <button 
                        onClick={handleSubmit}
                        >
                            Login Here!
                        </button>

<br>
</br>
<p>Not a user? Go to sign up</p>
                        <button onClick={goToSignUpPage}>Go to sign up</button>
                    </div>

            </div>
    )
}

export default LoginPage

