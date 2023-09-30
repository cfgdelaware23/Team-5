import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserUpdate = () => {
    let urlParams = useParams();
    let userId = urlParams.id;

    function handleSubmit() {

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
        console.log(response)

    }).catch(function (error) {
        console.log(error);
    })


    return (
        <>
        <div className='flex h-full w-full'>
            <AdminSideBar />
            <div className='flex flex-col'>
                    <div className="left-0 px-4 py-4">
                        <form>

                            <button onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div>

                </div>
                </div>


            </div>
        
        </>
    )
}

export default UserUpdate