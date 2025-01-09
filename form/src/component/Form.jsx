import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setshowPassword] = useState('');

  const handleSubmit = () => {
    if (!username || !password) {
      setError('Both fields are required!');
      setMessage('');
      return;
    }
    setError('')
    setMessage(`Welcome, ${username}!`);
  };

  return (
    <div className="flex justify-center mt-48">
      <div className="bg-white h-auto w-64 rounded shadow-lg p-4">
        <h2 className="text-center text-xl font-bold mb-4">Log In</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
        <div className="border-2 p-3 mb-3">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full bg-gray-200 p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="border-2 p-3 mb-3">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-gray-200 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-400 w-full py-2 mt-2 rounded text-white font-bold hover:bg-green-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
