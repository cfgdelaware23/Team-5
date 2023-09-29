import { useState } from 'react'

const Welcome = () => {
    const [user] = useState("User");
    return (
        <>
            <h1 className='font-black'>Welcome back, {user}</h1>
        </>
    ) 
};

export default Welcome
