import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [EBT_SNAP, setEBT_SNAP] = useState(false);

    const navigate = useNavigate();

    function goToTransactionPage() {
        console.log("Test");
        navigate("/transactions");
    }

    function handleSubmit() {
        console.log(lastName)
        console.log(zipCode)
        axios.post("http://localhost:4000/customer/save_customer", {
            name: firstName + " " + lastName,
            qualify: EBT_SNAP,
            address: zipCode,
            isAdmin: false,
        }).then(function (response) {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        })
    }

    return (

        <div >
            <h1 style={{ color: 'red', fontWeight: 'bold' }}>
                User Signup
            </h1>
            <div>
                <button 
                onClick={goToTransactionPage}
                style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px' }}
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
                        checked={EBT_SNAP}
                        onChange={e => setEBT_SNAP(e.target.checked)} />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => {
                    setFirstName('');
                    setLastName('');
                    setZipCode('');
                    setEBT_SNAP(false);
                }} style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px',marginRight: '20px'}}>
                    Clear
                </button>
                <button type="button" onClick={handleSubmit} style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px',marginRight: '20px'}}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SignupPage
