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

  const handleLogin = () => {
    // Add your login logic here (e.g., authentication, redirection)
    console.log('Logging in with member ID:', memberId);
  };

  const goToSignUpPage = () => {
    navigate('/signup');
  };

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
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

>>>>>>> 5645d4b5791d3488a17b90843594cf581c369e56
    return (

        <div >
            <h1>
                Login
            </h1>
            <div>
                <div>
                    Member ID:
                </div>

                <input className="border-2 border-black-500"
                    name="inputMemberId"
                    value={memberId}
                    required={true}
                    onChange={e => setMemberId(e.target.value)}
                    color="white"

                     />
                    <button 
                        onClick={handleSubmit}
                        >
                            Login Here!
                        </button>

<br>
</br>
<p>Not a user? Go to sign up</p>
                        <button onClick={goToSignUpPage}>Go to sign up</button>
                    </div>

            </div>
    )
>>>>>>> dbbe47fb0fd2cf2d6fc3958411fe8043f3250504
}

export default LoginPage;
