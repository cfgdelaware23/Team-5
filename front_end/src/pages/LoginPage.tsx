import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserSideBar from '../components/UserSideBar';
import AdminSideBar from '../components/AdminSideBar';

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

  if (!loaded) {
    return (
      <div className='flex justify-center align-middle w-screen h-screen' id="login-page-div">
        <div>
        <h1 className='font-extrabold text-4xl m-4 uppercase'>Login</h1>
          <div>Member ID:</div>
          <input className="border-2 border-black-500"
                          name="inputFirstName"
                          value={memberId}
                          required = {true}
                          onChange={e => setMemberId(e.target.value)} />
                      <div >
          <button
            onClick={handleSubmit}
            style={{backgroundColor: 'rgb(214,60,35)', color: 'black', marginTop: '25px', marginLeft: "auto", marginRight: "auto", display: "block"}}
          >
            Login Here
          </button>
          </div>
            <button
              onClick={goToSignUpPage}
            style={{backgroundColor: 'rgb(214,60,35)', color: 'black', marginTop: '10px', marginLeft: "auto", marginRight: "auto", display: "block"}}
            >
              Sign Up Here!
            </button>
          </div>
      </div>
  )}
  else if (loaded && !isAdmin) {
    return (
      <div id="login-page-div">
        <div style={{
        }}>
          <UserSideBar/>
          <br></br>
          <h1>Information</h1>
          <p>Name: {name}</p>
          <p>Zipcode: {zipCode}</p>
          <p>Qualifies: {qualify.toString()}</p>
          <p>Date Signed Up: {dateCreated.toString()}</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <div className='flex h-full w-full justify-center align-middle'>
          <AdminSideBar />
          <div className='flex flex-col'>
          <div id="login-page-div">
            <div style={{
              marginLeft: "50px",
            }}>
              <br></br>
              <h1>Information</h1>
              <p>Name: {name}</p>
              <p>Zipcode: {zipCode}</p>
              <p>Qualifies: {qualify.toString()}</p>
              <p>Date Signed Up: {dateCreated.toString()}</p>
            </div>
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
   
export default LoginPage;
