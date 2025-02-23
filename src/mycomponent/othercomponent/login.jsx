import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
import logo from '@/assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/login/',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,  // Include cookies for session-based auth
        }
      );

      console.log('Login successful:', response.data);
      localStorage.setItem('isAuthenticated', 'true');  // Simple login status indicator
      alert('Login successful!');
      navigate('/dashboard');  // Redirect to dashboard
    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data);
        alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
      } else {
=======

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email: email, // Use email instead of username
        password: password,
      });
      console.log('Login successful:', response.data);
      alert('Login successful!');
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      if (error.response) {
        // Backend validation errors
        console.error('Login failed:', error.response.data);
        alert(`Login failed: ${JSON.stringify(error.response.data)}`);
      } else {
        // Network or other errors
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
        console.error('Login failed:', error.message);
        alert('Login failed: Network error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r bg-white-700">
        <div className="relative max-w-3xl w-full h1-6 border rounded-xl bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
<<<<<<< HEAD
          <div className="flex justify-between items-center space-x-6">
            <section className="mt-12 text-center mb-6 ml-4">
              <h2 className="text-3xl font-bold text-gray-800 font-serif">Login</h2>
              <p className="text-lg text-gray-600 mt-2 font-serif">
                Login with Email and Password you have Registered
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full p-3 border rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-serif"
                  disabled={loading}
                >
=======
          <div className="flex justify-between items-center sh1ace-x-6">
            <section className="mt-12 text-center mb-6 ml-4">
              <h2 className="text-3xl font-bold text-gray-800 font-serif">Login</h2>
              <p className="text-lg text-gray-600 mt-2 font-serif">Login with Email and password you have Registered</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Generate password" className="w-full p-3 border rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-serif" disabled={loading}>
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </section>
            <div>
<<<<<<< HEAD
              <img
                src={logo}
                alt="slider"
                className="w-40 h-40 object-cover rounded-lg shadow-lg"
              />
=======
              <img src={logo} alt="slider" className="w-40 h-40 object-cover rounded-lg shadow-lg" />
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;