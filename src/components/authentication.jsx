import { Gamepad2, UserPlus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApiCall } from "../interceptors/ApiCallInterceptors";
import { useUserManagementStore } from "../stores/UserManagementStore";
import Chipmark from "./Chipmark";

const Authentication = () => {
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("home");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && formData.password !== formData.confPassword) {
      alert("Passwords do not match");
      return;
    }

    if (isSignup) {
      try {
        const response = await postApiCall("/auth/player", formData);
        alert("Registration successful ! Please login to proceed");
        setIsSignup(false);
      } catch (e) {
        alert("Registration failed! Please try again");
      }
    } else {
      try {
        const response = await postApiCall("/auth/login", formData);
        localStorage.setItem("token", response?.token);
        setLoggedInUserInfo(response?.player);
        handleNavigate();
      } catch (e) {
        alert("Login failed! Please try again");
      }
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
      {isSignup && (
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      )}
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

      {isSignup && (
        <div className="form-group">
          <label htmlFor="photoUrl">Photo Url (Optional):</label>
          <input
            type="photoUrl"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
          />
        </div>
      )}

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

      {isSignup && (
        <div className="form-group">
          <label htmlFor="confPassword">Confirm Password:</label>
          <input
            type="password"
            id="confPassword"
            name="confPassword"
            value={formData.confPassword}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {isSignup && (
        <div className="form-group">
          <label htmlFor="description">Description (Optional):</label>
          <textarea
            className="border w-full"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      )}

      <button type="submit" className="auth-button">
        {isSignup ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
};

export default Authentication;
