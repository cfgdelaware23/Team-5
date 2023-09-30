import React, { useState } from 'react';
import '../app.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [memberId, setMemberId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here (e.g., authentication, redirection)
    console.log('Logging in with member ID:', memberId);
  };

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
    </div>
  );
}

export default LoginPage;
