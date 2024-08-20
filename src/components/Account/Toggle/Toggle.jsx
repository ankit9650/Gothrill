import React, { useState } from 'react'
import Login from '../Sign in/Logincomponent';
import SignUp from '../Sign up/CreateAcc';

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