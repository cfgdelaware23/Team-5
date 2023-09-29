import { useState } from 'react'




function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipCode, setZipCode] = useState('')


    return (
        
        <>
        <h1>
            User Signup
        </h1>
        <div>
            <label >
                <div>
                    First Name:
                </div>

                <textarea
                    name="inputFirstName"
                    rows={1}
                    cols={40}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
            </label>
            <label>
                <div>
                    Last Name:
                </div>
                <textarea
                    name="inputSecondName"
                    rows={1}
                    cols={40}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} />
            </label>
            <label>
                <div>
                    Zip Code:
                </div>
                <textarea
                    name="inputZipCode"
                    rows={1}
                    cols={10}
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)} />
            </label>
            </div>
            <div>
                <button type="button" onClick={() => {
                    console.log(firstName)
                    console.log(lastName)
                    console.log(zipCode)
                }}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default SignupPage
