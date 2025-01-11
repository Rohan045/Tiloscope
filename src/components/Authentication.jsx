import { Gamepad2, UserPlus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApiCall } from "../interceptors/ApiCallInterceptors";
import {
  useDialogManagementStore,
  useLoaderManagementStore,
} from "../stores/DialogManagementStore";
import { useUserManagementStore } from "../stores/UserManagementStore";
import Chipmark from "./Chipmark";

const Authentication = () => {
  const { setLoggedInUserInfo } = useUserManagementStore();
  const { setDialogInfo } = useDialogManagementStore();
  const { setLoaderInfo } = useLoaderManagementStore();
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
      setDialogInfo({
        type: "info",
        text: "Passwords do not match",
      });
      return;
    }

    if (isSignup) {
      try {
        setLoaderInfo({
          text: "Signing In...",
        });
        await postApiCall("/auth/player", formData);
        setDialogInfo({
          type: "success",
          text: "Registration successful ! Please login to proceed",
        });
        setIsSignup(false);
      } catch (e) {
        setDialogInfo({
          type: "info",
          text: "Registration failed! Please try again",
        });
      } finally {
        setLoaderInfo(undefined);
      }
    } else {
      try {
        setLoaderInfo({
          text: "Logging In...",
        });
        const response = await postApiCall("/auth/login", formData);
        localStorage.setItem("token", response?.token);
        localStorage.setItem("user", JSON.stringify(response?.player));
        setLoggedInUserInfo(response?.player);
        handleNavigate();
      } catch (e) {
        setDialogInfo({
          type: "info",
          text: "Login failed! Please try again",
        });
      } finally {
        setLoaderInfo(undefined);
      }
    }
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
          <label htmlFor="description">Your Tag Line (Optional):</label>
          <textarea
            className="border w-full"
            id="description"
            name="description"
            maxLength={30}
            value={formData.description}
            onChange={handleChange}
            placeholder="Max 30 characters allowed"
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
