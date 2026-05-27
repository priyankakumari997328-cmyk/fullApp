import React, { useState } from "react";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // login submit
  const handleLogin = (e) => {
    e.preventDefault();

   
    const savedUser = JSON.parse(localStorage.getItem("user"));

    
    if (!savedUser) {
      alert("Please Signup First");
      return;
    }

   
    if (
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      alert("Login Successful");

   
      navigate("/signup");

    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Login Page</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;