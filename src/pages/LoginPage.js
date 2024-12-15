import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`
import '../styles/LoginPage.css';
import axios from 'axios';
// This is the login page
const LoginPage = () => {
    const navigate = useNavigate(); // Get the navigate function from react-router-dom
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login using axios to call backend API
    const handleLogin = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                username: email, // Ensure you use the correct key (e.g., username instead of email if needed)
                password,
            });
            console.log('Login successful:', response.data);

            // Redirect to dashboard upon successful login
            navigate('/dashboard'); // Change '/dashboard' to the route you want to redirect to
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            // Optionally handle error by showing a message to the user
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        console.log('Logging in with:', email, password);
        handleLogin(email, password); // Call the real login function here
    };

    return (
        <div className='LoginPage-container'>
            <div className='left-section'>
                <h1>Welcome to BroSpace</h1>
                <p className='subtext'>Connect Grow Thrive</p>
                <div className='login-section'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
