import { useState } from 'react'
import '../app.css'




function LoginPage({}) {
    const [memberId, setMemberId] = useState('')
    const onRegisterPress = () =>{
        setMemberId('')
    }

    const onLoginPress = () =>{
        if(memberId.length > 0){
    }

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
                <button type="button" onClick={() => {
                    console.log(memberId)
                    onRegisterPress()
                }}>
                    Register New Member
                </button>
            </div>
            <div>
                <button type="button" onClick={() => {
                    console.log(memberId)
                    onLoginPress()
                }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default LoginPage

