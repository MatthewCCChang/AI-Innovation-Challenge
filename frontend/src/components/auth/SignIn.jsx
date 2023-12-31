import React, { useState } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => 
            {console.log(userCredential); navigate("/Home");}).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>  
                <h1>Sign In</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
    
}

export default SignIn;