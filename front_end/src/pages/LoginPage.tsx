import { useState } from 'react'
import '../app.css'



function LoginPage() {
    const [memberId, setMemberId] = useState('')


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
                        required = {true}
                        onChange={e => setMemberId(e.target.value)} />
            </div>
        </div>
    )
}

export default LoginPage
