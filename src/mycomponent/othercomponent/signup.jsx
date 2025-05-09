import React, { useState } from 'react';
import axios from 'axios';
import logo from '@/assets/logo.png';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate();

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9@.+_-]+$/;  // Allowed characters: letters, numbers, @, ., +, -, _
    return regex.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !contactNumber || !message) {
      alert('Please fill all fields');
      return;
    }

    // Validate username
    if (!validateUsername(username)) {
      alert('Username can only contain letters, numbers, and @/./+/-/_ characters.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/register/',
        {
          username: username,
          email: email,
          password: password,
          contact_number: contactNumber,
          message: message,
        },
        {
          withCredentials: true,  // Include cookies for session-based auth
        }
      );

      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      navigate('/login');  // Redirect to login page
    } catch (error) {
      if (error.response) {
        console.error('Signup failed:', error.response.data);
        alert(`Signup failed: ${error.response.data.detail || 'Unknown error'}`);
      } else {
        console.error('Signup failed:', error.message);
        alert('Signup failed: Network error');
=======

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username: username,
        email: email,
        password: password,
        contact_number: contactNumber,
        message: message,
      });
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      // Handle successful registration (e.g., store token, redirect)
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data);
        alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
      } else {
        console.error('Registration failed:', error.message);
        alert('Registration failed: Network error');
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
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
=======
          <div className="flex justify-between items-center sh1ace-x-6">
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
            <section className="mt-12 text-center mb-6 ml-4">
              <h2 className="text-3xl font-bold text-gray-800 font-serif">Register</h2>
              <p className="text-lg text-gray-600 mt-2 font-serif">Have questions or Ask anything</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
<<<<<<< HEAD
                <input
                  type="text"
                  placeholder="Your Username"
                  className="w-full p-3 border rounded-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
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
                  placeholder="Generate password"
                  className="w-full p-3 border rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Your Contact Number"
                  className="w-full p-3 border rounded-lg"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-serif"
                  disabled={loading}
                >
=======
                <input type="text" placeholder="Your Username" className="w-full p-3 border rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Generate password" className="w-full p-3 border rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Your Contact Number" className="w-full p-3 border rounded-lg" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                <textarea placeholder="Message" className="w-full p-3 border rounded-lg" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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

export default Signup;