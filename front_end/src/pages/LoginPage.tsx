import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [memberId, setMemberId] = useState('');
  const navigate = useNavigate();
    
    const [loaded, setLoaded] = useState(false);
    const [qualify, setQualify] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [name, setName] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [createdAt, setCreatedAt] = useState('')

  const goToSignUpPage = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>Member ID:</div>
        <input
          name="inputMemberId"
          value={memberId}
          required={true}
          onChange={(e) => setMemberId(e.target.value)}
          style={{ backgroundColor: 'grey', color: 'white' }}
        />
        <button
          onClick={handleLogin}
          style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px' }}
        >
          Login
        </button>
        <div>
          <button
            onClick={goToSignUpPage}
            style={{ backgroundColor: 'grey', color: 'black', marginTop: '10px' }}
          >
            Sign Up Here!
          </button>
        </div>
      </div>

        <div>Name: {name}</div>
        <div>Zipcode: {zipCode}</div>
        <div>Qualify for lowering pricing: {qualify.toString()}</div>
        <div>User Is Admin: {isAdmin.toString()}</div>
        <div>User Member Since: {createdAt.toString()}</div>

    </div>
  );

    function handleLogin() {
        axios.get(`http://localhost:4000/customer/retrieve_customer/${memberId}`, {
        }).then(function (response) {
            // response holds data
            console.log(response.data, response.data.qualify);
            setQualify(response.data.qualify);
            setIsAdmin(response.data.isAdmin);
            setName(response.data.name);
            setZipCode(response.data.address);
            setCreatedAt(response.data.createdAt);
            console.log(response.data);
            setLoaded(true);

        }).catch(function (error) {
            console.log(error);
        })
    }
  }
   
export default LoginPage;
