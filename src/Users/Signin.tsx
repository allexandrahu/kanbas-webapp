import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./style.css";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
    dob: "",
    email: "", 
  });
  const navigate = useNavigate();

  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile", { replace: true });
    } catch (error) {
      console.error("Signin failed", error);
      // Handle signin failure (e.g., show an error message)
    }
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Signin</h1>
      <div className="input-group">
        <label htmlFor="username" className="input-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="input-field"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          placeholder="Enter username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input-field"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="Enter password"
        />
      </div>
      <button onClick={signin} className="signin-button">
        Sign In
      </button>
    </div>
  );
}
