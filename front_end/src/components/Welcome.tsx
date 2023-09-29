import { useState } from 'react'

const Welcome = () => {
    const [user] = useState("User");
    return (
        <>
            <h1 className='font-extrabold text-3xl'>Welcome back, <span className='italic'>{user}</span></h1>
        </>
    ) 
};

export default Welcome
