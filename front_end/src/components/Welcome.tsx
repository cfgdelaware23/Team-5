import { useState } from 'react'

const Welcome = (props) => {
    return (
        <>
            <h1 className='sm:mx-5 lg:mx-10 my-8 font-extrabold text-4xl'>
                Welcome back, <span className='italic'>{props.name}</span>
            </h1>
        </>
    )
};

export default Welcome
