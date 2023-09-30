import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [EBT_SNAP, setEBT_SNAP] = useState(false);
    const [WIC, setWIC] = useState(false);

    const navigate = useNavigate();

    function goToTransactionPage() {
        console.log("Test");
        navigate("/customer/products");
    }

    function handleSubmit() {
        console.log(lastName)
        console.log(zipCode)
        axios.post("http://localhost:4000/customer/save_customer", {
            name: firstName + " " + lastName,
            qualify: EBT_SNAP, WIC,
            address: zipCode,
            isAdmin: false,
        }).then(function (response) {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        })
        navigate("/customer/products");
    }

    const goToLoginPage = () => {
        navigate('/');
      };

    return (
        <div className='flex flex-col w-screen h-screen justify-center align-middle text-center'>
            <h1 className='font-extrabold text-4xl m-4 uppercase'>Sign Up</h1>
            <form className='flex flex-col align-middle items-center font-bold text-left'>
                <label>First Name:</label>
                    <input className="border-2 border-black-500"
                        name="inputFirstName"
                        value={firstName}
                        required={true}
                        onChange={e => setFirstName(e.target.value)} placeholder='First name' />

                <label>Last Name:</label>
                <input className="border-2 border-black-500"
                    name="inputSecondName"
                    value={lastName}
                    required={true}
                    onChange={e => setLastName(e.target.value)} 
                    placeholder='Last name' />

                <label>Zip Code:</label>
                <input className="border-2 border-black-500"
                    name="inputZipCode"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    placeholder='Zip code' />
            </form>
            <div className='mt-4 mb-2 mx-2'>
                <em className='italic font-semibold'>Please select all that apply:</em>
                <div className='flex justify-center'>
                    <div className='mx-2'>
                        <label className="font-medium">EBT: {' '}</label>
                            <input
                                name="inputEBT"
                                type="checkbox"
                                checked={EBT_SNAP}
                                onChange={e => setEBT_SNAP(e.target.checked)} />
                    </div>
                    <div className='mx-2'>
                        <label className="font-medium">WIC: {' '}</label>
                            <input
                                name="inputEBT"
                                type="checkbox"
                                checked={WIC}
                                onChange={e => setWIC(e.target.checked)} />
                    </div>
                </div>
            </div>
            <div className="justify-center">
                <button className='bg-slate-200 text-black mx-1 font-medium' type="button" onClick={() => {
                    setFirstName('');
                    setLastName('');
                    setZipCode('');
                    setEBT_SNAP(false);
                    setWIC(false);
                }}>
                    Clear
                </button>
                <button className='bg-blue-700 text-white mx-1 font-medium' type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <div className="py-3">
                <a className='hover:cursor-pointer font-medium text-blue-700' onClick={goToLoginPage}>Already have an account?</a>
            </div>
        </div>
    )
}

export default SignupPage
