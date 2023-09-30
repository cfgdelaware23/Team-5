import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

// TODO: Fill out handleSubmit
// TODO: Fill out form in the HTML

const UserUpdate = () => {
    let urlParams = useParams();
    let userId = urlParams.id;

    console.log(userId);

    function handleSubmit(e) {
        console.log(e);
        console.log(e.target);
        let name0 = document.querySelector("#name-id").value;
        let qualify0 = document.querySelector("#check-id").checked;
        let zipCode0 = document.querySelector("#zip-id").value;
        let isAdmin0 = document.querySelector("#admin-id").checked;

        axios.put(`http://localhost:4000/customer/update_customer/${userId}`, {
            name: name0,
            qualify: qualify0,
            address: zipCode0,
            isAdmin: isAdmin0,
        }).then(function (response) {
            console.log(response);
            window.location.reload();

        }).catch(function (error) {
            console.log(error);
        })

    }

    const [zipCode, setZipCode] = useState('')
    const [name, setName] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [qualify, setQualify] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    axios.get(`http://localhost:4000/customer/retrieve_customer/${userId}`, {
    }).then(function (response) {
        // response holds data
        setZipCode(response.data.address);
        setName(response.data.name);
        setQualify(response.data.qualify);
        setDateCreated(response.data.createdAt);
        setIsAdmin(response.data.isAdmin);
        document.querySelector("#admin-id").checked = response.data.isAdmin;
        document.querySelector("#check-id").checked = response.data.qualify;
        // console.log(response.data.isAdmin);
        // console.log(isAdmin);

    }).catch(function (error) {
        console.log(error);
    })


    return (
        <>
            <div className='flex h-full w-full'>
                <AdminSideBar />
                <div className='flex flex-col'>
                    <div className="left-0 px-4 py-4">
                        <div className='flex flex-col w-screen h-screen justify-center align-middle text-center'>
                            <h1 className='font-extrabold text-4xl m-4 uppercase'>Update User</h1>
                            <form className='flex flex-col align-middle items-center font-bold text-left'>
                                <label>Name</label>
                                <input id="name-id" className="border-2 border-black-500"
                                    name="inputSecondName"
                                    defaultValue={name}
                                    required={true}
                                    // onChange={e => setName(e.target.value)} 
                                    placeholder='Name' />

                                <label>Zip Code:</label>
                                <input id="zip-id" className="border-2 border-black-500"
                                    name="inputZipCode"
                                    defaultValue={zipCode}
                                    // onChange={e => setZipCode(e.target.value)}
                                    placeholder='Zip code' />
                                <div className='mt-4 mb-2 mx-2'>
                                    <em className='italic font-semibold'>Please select all that apply:</em>
                                    <div className='flex justify-center'>
                                        <div className='mx-2'>
                                            <label className="font-medium">EBT/WIC: {' '}</label>
                                            <input
                                                id="check-id"
                                                name="inputEBT"
                                                type="checkbox"
                                                defaultChecked={qualify}
                                            // onChange={e => setQualify(e.target.checked)} />
                                            />
                                        </div>
                                        <div className='mx-2'>
                                            <label className="font-medium">Is Admin:</label>
                                            <input
                                                id="admin-id"
                                                name="isAdmin"
                                                type="checkbox"
                                                defaultChecked={isAdmin}
                                            // onChange={e => setQualify(e.target.checked)} />
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <button className='bg-blue-700 text-white mx-1 font-medium' type="button" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default UserUpdate