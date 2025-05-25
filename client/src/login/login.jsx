// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("hello")
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("login successfull");
        navigate('/dashboard')
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2 rounded-t">
          <div className="flex items-center">
            <i className="fas fa-user text-lg mr-2"></i>
            <span className="font-semibold">LOG IN</span>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-blue-800 font-semibold mb-2">
              Username
            </label>
            <div className="flex items-center border rounded">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 focus:outline-none"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="bg-gray-200 p-2 rounded-r">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded">
              <input
                type="password"
                placeholder="........."
                className="w-full px-3 py-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="bg-gray-200 p-2 rounded-r">
                <i className="fas fa-lock"></i>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 py-3">
          © Copyright 2025. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
