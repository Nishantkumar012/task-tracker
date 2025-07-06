import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert('Username is required');
      return;
    }

    localStorage.setItem('username', username.trim());
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-md p-8 rounded-xl w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={handleLogin}
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 rounded transition-all duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;