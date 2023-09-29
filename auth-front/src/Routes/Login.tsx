import { useAuth } from '../auth/AuthProvider'
import Navbar from '../componentes/Navbar'
import {Navigate , useNavigate} from 'react-router-dom';
import Imgrick from "../img/email2.png"
import { AuthResponseError, AuthResponse } from '../types/types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();

  function handleChange(e: React.ChangeEvent) {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    auth.AuthProvider(true);
  }/*
  if (auth.isAuthenticated) {
    return <Navigate to="/Dash" />;
  }*/
  return (
    <Navbar>
      <form onSubmit={handleSubmit} className="form">
        <h1>Login</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Username</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Link to="/">
        <button>Register</button>
        </Link>
        <Link to="/Dash">
        <button>Ingresar</button>
        </Link>
      </form>
    </Navbar>
  );
}