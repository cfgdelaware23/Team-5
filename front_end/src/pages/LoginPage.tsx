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
    <div>
      <h1 style={{ color: 'red', fontWeight: 'bold' }}>Login</h1>
      <div>
        <div>Member ID:</div>
        <input className="border-2 border-black-500"
                        name="inputFirstName"
                        value={memberId}
                        required = {true}
                        onChange={e => setZipCode(e.target.value)} />
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
          style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px' }}
        >
          <h1>Login Here</h1>
        </button>
        </div>
          <button
            onClick={goToSignUpPage}
            style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px' }}
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
