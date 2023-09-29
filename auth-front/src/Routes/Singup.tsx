import React from 'react'
import Navbar from '../componentes/Navbar'
import {Navigate,  useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { API_URL } from '../auth/constans'
import { AuthResponseError,AuthResponse } from '../types/types'

function Singup() {
  const [name, setname] = React.useState('')  
  const [username, setusername] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [errorResponse, setErrorResponse] = React.useState('');

  
  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username, password, name);

    try {
      const response = await fetch("http://localhost:3100/api/signup",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name }),
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);
        setusername("");
        setpassword("");
        setname("");
        goTo("/");
      } else {
        const json = (await response.json()) as AuthResponseError;

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  /*
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }*/

  return (
    <Navbar>
      <form className='form' onSubmit={handleSubmit}>
      <h1>Registro</h1>
      {!!errorResponse && <div className='errorMessage'>{errorResponse}</div>}
      <label>Nombre</label>
      <input type="text" value={name} onChange={e => setname(e.target.value)} />
      <label>Username</label>
      <input type="text" value={username} onChange={e => setusername(e.target.value)} />
      <label>Password</label>
      <input type="Password" value={password} onChange={e =>setpassword(e.target.value)} />
      <button>Registrar</button>
    </form>
    </Navbar>
  )
}

export default Singup