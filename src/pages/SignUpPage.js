import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css';
import axios from 'axios';
//This is the sign up page
function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send POST request to backend for signup
      const response = await axios.post('http://localhost:8000/api/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log('Signup successful:', response.data);
      // Redirect to login page upon successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
      setError('Signup failed. Please try again.');
    }
  };

  const handleRedirect = () => {
    navigate('/loginpage'); // Redirect to login page if user already has an account
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-form">
          <h2>Welcome Brother</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
          <div className="redirect-login">
            <button onClick={handleRedirect}>Already have an account? Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
