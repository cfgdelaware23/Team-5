import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserSideBar from '../components/UserSideBar';
import AdminSideBar from '../components/AdminSideBar';
import Welcome from '../components/Welcome';
import DashboardCard from '../components/DashboardCard';

function LoginPage() {
  const [memberId, setMemberId] = useState('');
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [zipCode, setZipCode] = useState('')
  const [name, setName] = useState('')
  const [dateCreated, setDateCreated] = useState('')
  const [qualify, setQualify] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const goToSignUpPage = () => {
    navigate('/signup');
  };

  const userInformation = (
    <div className='flex flex-col'>
      <div id="login-page-div">
        <div>
          <p>Zipcode: {zipCode}</p>
          <p>Qualifies: {qualify.toString()}</p>
          <p>Member Since: {dateCreated.toString()}</p>
        </div>
      </div>
    </div>
  );
  
  if (!loaded) {
    return (
        // <div className='flex flex-col w-screen h-screen justify-center items-top text-center'>
        //     <h1 className='font-extrabold text-4xl m-4 uppercase'>Sign Up</h1>
        //     <form id='user-form' className='flex flex-col align-middle items-center font-bold text-left w-full p-4'>
        //         <label>First Name:</label>
        //             <input className="border-2 border-black-500"
        //              />

        //         <label>Last Name:</label>
        //         <input className="border-2 border-black-500"
        //             name="inputSecondName"
        //             value={lastName}
        //             required={true}
        //             onChange={e => setLastName(e.target.value)} 
        //             placeholder='Last name' />

        //         <label>Zip Code:</label>
        //         <input className="border-2 border-black-500"
        //             name="inputZipCode"
        //             value={zipCode}
        //             onChange={e => setZipCode(e.target.value)}
        //             placeholder='Zip code' />
        //     </form>
        //     <div className='mt-4 mb-2 mx-2'>
        //         <em className='italic font-semibold'>Please select all that apply:</em>
        //         <div className='flex justify-center'>
        //             <div className='mx-2'>
        //                 <label className="font-medium">EBT: {' '}</label>
        //                     <input
        //                         name="inputEBT"
        //                         type="checkbox"
        //                         checked={EBT_SNAP}
        //                         onChange={e => setEBT_SNAP(e.target.checked)} />
        //             </div>
        //             <div className='mx-2'>
        //                 <label className="font-medium">WIC: {' '}</label>
        //                     <input
        //                         name="inputEBT"
        //                         type="checkbox"
        //                         checked={WIC}
        //                         onChange={e => setWIC(e.target.checked)} />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="justify-center">
        //         <button className='bg-slate-200 text-black mx-1 font-medium' type="button" onClick={() => {
        //             setFirstName('');
        //             setLastName('');
        //             setZipCode('');
        //             setEBT_SNAP(false);
        //             setWIC(false);
        //         }}>
        //             Clear
        //         </button>
        //         <button className='bg-blue-700 text-white mx-1 font-medium' type="button" onClick={handleSubmit}>
        //             Submit
        //         </button>
        //     </div>
        //     <div className="py-3">
        //         <a className='hover:cursor-pointer font-medium text-blue-700' onClick={goToLoginPage}>Already have an account?</a>
        //     </div>
        // </div>

      
      <div className='flex flex-col justify-center align-middle w-screen h-screen text-center' id="login-page-div">
          <h1 className='font-extrabold text-4xl m-4 uppercase'>Log In</h1>
          <form id='user-form' className='flex flex-col align-middle items-center font-bold text-left w-full p-4'>
            <label>Member ID:</label>
            <input className="border-2 border-black-500"
                    name="inputFirstName"
                    placeholder='123456'
                    value={memberId}
                    required = {true}
                    onChange={e => setMemberId(e.target.value)} />
          </form>
          <div className='flex justify-center'>
            <button className='bg-slate-700 text-white mx-1 font-medium w-1/5 hover:bg-slate-600 transition duration-100' onClick={handleSubmit} >
              Log In 
            </button>
          </div>
          <div className="py-3">
            <em><a className='hover:cursor-pointer font-medium text-slate-700 hover:underline hover:text-slate-600' onClick={goToSignUpPage}>Don't have an account? Sign up here!</a></em>
          </div>
      </div>
  )}
  else if (loaded && !isAdmin) {
    return (
      <div className='flex flex-col'>
        <div id="login-page-div">
          <div>
            <p>Zipcode: {zipCode}</p>
            <p>Qualifies: {qualify.toString()}</p>
            <p>Member Since: {dateCreated.toString()}</p>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <div className='flex h-full w-full justify-left align-middle'>
          <AdminSideBar />
          <div>
            <Welcome name={name}/>
            <div className='mx-8'>
              <DashboardCard 
                header='User Information'
                data={userInformation}
                />
            </div>
          </div>
        </div>
      </>
    )
  }
    function handleSubmit() {
        axios.get(`http://localhost:4000/customer/retrieve_customer/${memberId}`, {
        }).then(function (response) {
            // response holds data
            console.log(response)
            setZipCode(response.data.address);
            setName(response.data.name);
            setQualify(response.data.qualify);
            setDateCreated(response.data.createdAt);
            setIsAdmin(response.data.isAdmin);
            setLoaded(true);

        }).catch(function (error) {
            console.log(error);
        })
    }
  }
   
export default LoginPage
