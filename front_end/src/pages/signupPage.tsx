import { useState } from 'react'
import '../app.css'



function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [EBT, setEBT] = useState(false)
    const [SNAP, setSNAP] = useState(false)


    return (

        <div >
            <h1>
                User Signup
            </h1>
            <div>
                    <div>
                        First Name:
                    </div>

                    <input
                        name="inputFirstName"
                        value={firstName}
                        required = {true}
                        onChange={e => setFirstName(e.target.value)} />
                    <div >
                        Last Name:
                    </div>
                    <input
                        name="inputSecondName"
                        value={lastName}
                        required = {true}
                        onChange={e => setLastName(e.target.value)} />
                    <div>
                        Zip Code:
                    </div>
                    <input
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
