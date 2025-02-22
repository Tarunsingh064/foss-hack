import React, { useEffect } from 'react';

const Dashboard = () => {
  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token is found
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are logged in!</p>
      <button onClick={() => {
        localStorage.removeItem('token');  // Logout
        window.location.href = '/login';  // Redirect to login
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;