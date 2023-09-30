import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [memberId, setMemberId] = useState('');
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [zipCode, setZipCode] = useState('')

  const handleLogin = () => {
    // Add your login logic here (e.g., authentication, redirection)
    console.log('Logging in with member ID:', memberId);
  };

  const goToSignUpPage = () => {
    navigate('/signup');
  };

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
                        Zipcode:
                    </div>
                    <input className="border-2 border-black-500"
                        name="inputZipCode"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)} />
                        <div>
        <button
          onClick={handleLogin}
          style={{ backgroundColor: '#A8EB12', color: 'black', marginTop: '25px', marginLeft: "auto", marginRight: "auto", display: "block"}}
        >
          <h1>Login Here</h1>
        </button>
        </div>
          <button
            onClick={goToSignUpPage}
          style={{ backgroundColor: '#A8EB12', color: 'black', marginTop: '10px', marginLeft: "auto", marginRight: "auto", display: "block"}}
          >
            Sign Up Here!
          </button>
      </div>
    </div>
  );
    // interface dataResponse {
    //     qualify: boolean,
    //     isAdmin: boolean,
    //     name: string,
    //     zipCode: string,
    //     createdAt: string,
    // }

    function handleSubmit() {
        axios.get(`http://localhost:4000/customer/retrieve_customer/${memberId}`, {
        }).then(function (response) {
            // response holds data
            setZipCode(response.data.address);
            console.log(response.data);
            setLoaded(true);

        }).catch(function (error) {
            console.log(error);
        })
    }
  }
   
export default LoginPage;
