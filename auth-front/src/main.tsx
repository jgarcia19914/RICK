import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from "./Routes/Login.tsx"
import Singup from "./Routes/Singup.tsx"
import Dash from './Routes/Dash.tsx'
import Protec from './Routes/Protec.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'
import Detail from './componentes/Detail.tsx'
import Personajes from './componentes/Personajes.tsx'
import About from './componentes/About.tsx'
import Home from './views/Home.jsx'


const router = createBrowserRouter([  
  {
    path: '/',
    element: <Login />,
  
  },
  {
    path: '/Singup',
    element: <Singup />,
  
  },
  {
    path: '/',
    element: <Protec/>,
    children: [{
      path: '/Dash', 
      element: <Dash />,
    }]
  
  },
  {
    path: '/',
    element: <Protec/>,
    children: [{
      path: '/Detail/:id', 
      element: <Detail />,
    }]
  
  },
  {
    path: '/',
    element: <Protec/>,
    children: [{
      path: '/Personajes', 
      element: <Personajes />,
    }]
  
  },
  {
    path: '/',
    element: <Protec/>,
    children: [{
      path: '/About', 
      element: <About />,
    }]
  
  },
  {
    path: '/',
    element: <Protec/>,
    children: [{
      path: '/Home', 
      element: <Home characters={undefined} onClose={undefined} />,
    }]
  
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
  </React.StrictMode>,
)
