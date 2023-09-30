import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [EBT, setEBT] = useState(false)
    const [SNAP, setSNAP] = useState(false)

    const navigate = useNavigate();

    function goToTransactionPage() {
        console.log("Test");
        navigate("/transactions");
    }


    return (

        <div >
            <h1>
                User Signup
            </h1>
            <div>
                <button 
                onClick={goToTransactionPage}
                color="white"
                >Go to transactions</button>
                    <div>
                        First Name:
                    </div>

                    <input className="border-2 border-black-500"
                        name="inputFirstName"
                        value={firstName}
                        required = {true}
                        onChange={e => setFirstName(e.target.value)} />
                    <div >
                        Last Name:
                    </div>
                    <input className="border-2 border-black-500"
                        name="inputSecondName"
                        value={lastName}
                        required = {true}
                        onChange={e => setLastName(e.target.value)} />
                    <div>
                        Zip Code:
                    </div>
                    <input className="border-2 border-black-500"
                        name="inputZipCode"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)} />
            </div>
            <div>
                <p> Please select all that apply:</p>
            </div>
            <div>
                <label>
                        EBT:
                    <input
                        name="inputEBT"
                        type="checkbox"
                        checked={EBT}
                        onChange={e => setEBT(e.target.checked)} />
                </label>
            </div>
            <div>
                <label>
                        SNAP:  
                    <input
                        name="inputSNAP"
                        type="checkbox"
                        checked={SNAP}
                        onChange={e => setSNAP(e.target.checked)} />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => {
                    setFirstName('')
                    setLastName('')
                    setZipCode('')
                    setEBT(false)  
                    setSNAP(false)
                }}>
                    Clear
                </button>
                <button type="button" onClick={() => {
                    console.log(firstName)
                    console.log(lastName)
                    console.log(zipCode)
                }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SignupPage
