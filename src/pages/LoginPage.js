import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Use `useNavigate` instead of `useHistory`
import '../styles/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate(); // Use `useNavigate()` to get the navigate function
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Dummy login function
    const dummyLogin = () => {
        const dummyUser = {
            username: 'dummyUser@email.com',
            password: '1234',
        };

        console.log('Logged in with dummy credentials:', dummyUser);

        // Redirect to dashboard
        navigate('/dashboard'); // Use `navigate` to go to the dashboard
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // You could add your login logic here
        console.log('Logging in with:', email, password);
        dummyLogin(); // Call dummy login for now
    };

    // Run `dummyLogin` on component mount if needed (for testing purposes)
    useEffect(() => {
        // You can keep this if you want dummy login on mount
        // dummyLogin();
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div className='LoginPage-container'>
            <div className='left-section'>
                <h1>Welcome to BroSpace</h1>
                <p className='subtext'>Connect Grow Thrive</p>
                <div className='login-section'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}> {/* Form submits on click */}
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                required 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input 
                                type='password' 
                                id='password' 
                                name='password' 
                                required 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type='submit'>Login</button>
                        <p>Don't have an account? <a href='/signup'>Sign Up</a></p>
                    </form>
                </div>
            </div>
            <div className='right-section'>
                <img src={require('../images/BrospaceHomePage.png')} alt='Brospace' />
            </div>
        </div>
    );
};

export default LoginPage;
