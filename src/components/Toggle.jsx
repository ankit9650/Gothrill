import React, { useState } from 'react'
import Login from './Logincomponent';
import SignUp from './CreateAcc';

function Toggle() {
    const [issignup, setissignup] = useState(false)
    const toggleform = () => {
        setissignup(!issignup);

    };

    return (
        <>
            <div>
                {issignup ? (
                    <SignUp toggleform={toggleform} />
                ) : (
                    <Login toggleform={toggleform} />
                )}
            </div>
        </>
    );
}

export default Toggle