import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
 
    setLoading(true);

    try {
      // const response = await fetch('/api/auth/login', {  // Or the full URL if needed
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      const response = await api.post("/auth/login", { email, password });

      // const data = await response.json();
      const data = response.data; 

      // if (!response.ok) {
      //   // Handle non-2xx responses (e.g., 404, 500)
      //   throw new Error(data.message || 'Login failed');
      // }

      // Successful login
      console.log('Login successful:', data); // Log the data

      // Store the token (and user ID if needed)
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);

    //   setSuccessMessage('Login successful!');

  navigate('/login-successful');

    } catch (err) {
      console.error('Login error:', err);

      if (err.response) {
        // Server responded with an error status
        setErrorMessage(err.response.data.message || 'Login failed');
      } else if (err.request) {
        // Request was made, but no response received
        setErrorMessage('Network error: Could not connect to the server.');
      } else {
        // Something happened in setting up the request
        setErrorMessage('An unexpected error occurred.');
      }

      // setError(err.message); // Set the error message from the catch
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        width: '400px',
        padding: '30px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 className="text-center mb-4">Login</h2>
        {errorMessage && <div className="alert alert-danger mb-3" role="alert">{errorMessage}</div>}
        {/* {successMessage && <div className="alert alert-success mb-3" role="alert">{successMessage}</div>} */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          <div className="mt-3 text-center">
            <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/register" className="text-decoration-none">New User? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );


}

export default LoginPage;
