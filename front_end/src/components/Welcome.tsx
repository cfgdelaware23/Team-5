import { useState } from 'react'

const Welcome = () => {
    const [user] = useState("User");
    return (
        <>
            <h1 className='mx-5 my-8 font-extrabold text-4xl'>Welcome back, <span className='italic'>{user}</span></h1>
        </>
    ) 
};

export default Welcome
