import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [memberId, setMemberId] = useState('');
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [zipCode, setZipCode] = useState('')
    const [name, setName] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [qualify, setQualify] = useState(false);

  const goToSignUpPage = () => {
    navigate('/signup');
  };

    if (!loaded) {
      return (
    <div id="login-page-div">
      <div>
      <h1 style={{ color: 'black', fontStyle: "bold", fontSize: '24px', textAlign: "center", marginBottom: "10px"}}>Login</h1>
        <div>Member ID:</div>
        <input className="border-2 border-black-500"
                        name="inputFirstName"
                        value={memberId}
                        required = {true}
                        onChange={e => setMemberId(e.target.value)} />
                    <div >
        <button
          onClick={handleSubmit}
          style={{ color: 'black', marginTop: '25px', marginLeft: "auto", marginRight: "auto", display: "block"}}
        >
          Login Here
        </button>
        </div>
          <button
            onClick={goToSignUpPage}
          style={{ color: 'black', marginTop: '10px', marginLeft: "auto", marginRight: "auto", display: "block"}}
          >
            Sign Up Here!
          </button>
      </div>
    </div>
  )}
  else {
    return (
      <>
    <div id="login-page-div">
        <div>
          <br></br>
          <h1>Information</h1>
          <p>Name: {name}</p>
          <p>Zipcode: {zipCode}</p>
          <p>Qualifies: {qualify.toString()}</p>
          <p>Date Signed Up: {dateCreated.toString()}</p>
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
            setLoaded(true);

        }).catch(function (error) {
            console.log(error);
        })
    }
  }
   
export default LoginPage;
