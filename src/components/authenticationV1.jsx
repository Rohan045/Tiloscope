import { Gamepad2, UserPlus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/authentication.css";
import Chipmark from "./chipmark";

const AuthFormV1 = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/feed");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      alert(`Signing up with email: ${formData.email}`);
      handleNavigate();
    } else {
      alert(`Logging in with email: ${formData.email}`);
      handleNavigate();
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <Chipmark
          config={{
            icon: <Gamepad2 size={20} strokeWidth={1} />,
            text: "Login to Start",
            isSelected: !isSignup,
            onClickFn: () => setIsSignup(false),
          }}
        />

        <Chipmark
          config={{
            icon: <UserPlus size={20} strokeWidth={1} />,
            text: "New User ?",
            isSelected: isSignup,
            onClickFn: () => setIsSignup(true),
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="auth-button">
        {isSignup ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
};

export default AuthFormV1;
