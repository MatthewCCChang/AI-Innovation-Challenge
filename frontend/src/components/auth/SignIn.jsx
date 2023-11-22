import React, { useState } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, signInEmail, password).then((userCredential) => 
            {console.log(userCredential); navigate("/Home");}).catch((error) => {
            console.log(error)
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, signUpEmail, password).then(
            (userCredential) => {
                
                console.log(userCredential);
                return <Navigate to="/Home"/>;})
            .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>  
                <h1>Sign In</h1>
                <input type="email" placeholder='Enter your email' value={signInEmail} onChange={(e)=> setSignInEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Log In</button>
            </form>
            <form onSubmit={signUp}>  
                <h1>Create Account</h1>
                <input type="email" placeholder="Enter your email" value={signUpEmail} onChange={(e)=> setSignUpEmail(e.target.value)}></input>
                <input type="password" placeholder="Enter your password"  value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        
    )
    
}

export default SignIn;