import React, { useState } from "react";
import "../Style/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // signup submit
  const handleSignup = (e) => {
    e.preventDefault();

    // validation
    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    // save data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    // open login page
    navigate("/");
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Signup Page</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;