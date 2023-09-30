import { useState } from 'react'
import Link from 'react-router-dom'
import '../app.css'




function LoginPage({}) {
    const [memberId, setMemberId] = useState('')

    const onRegisterPress = () =>{
        setMemberId('')
    }



    return (

        <div >
            <h1>
                Login
            </h1>
            <div>
                <div>
                    Member ID:
                </div>

                <input
                    name="inputMemberId"
                    value={memberId}
                    required={true}
                    onChange={e => setMemberId(e.target.value)} />
            </div>
            <div>
            <Link 
                className="btn btn-pink"
                role="button"
                to="/"
                onClick={onRegisterPress()}
                > 
                Button1
                </Link> 
                <Link to="/signup">
                    <button type="button">
                        Register New Member
                    </button>
                    </Link>
                <Link to="/transactions">
                    <button type="button">
                        Submit
                    </button>
                    </Link>
            </div>
        </div>
    )
}

export default LoginPage

