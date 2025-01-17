
import React, { useState } from "react";
// import axios from 'axios'

import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  let navigate=   useNavigate()
  // State variables to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);

    // Save form data to localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/login')



  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br />

        <label htmlFor="passWord">Password:</label>
        <input
          type="password"
          id="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>

      <Link to='/login'> Login ka page</Link>
    </div>
  );
}

export default SignUp;
