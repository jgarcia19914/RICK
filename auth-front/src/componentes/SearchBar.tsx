import { useState } from 'react';
import {Link} from "react-router-dom"
import "../Style/Search.css"
import logo from "../img/58f37720a4fa116215a9240f.png"

export default function SearchBar({onSearch}) {
   const[id ,setId]=useState("");

   const handleChange =(event) => {
      setId(event.target.value);
   };
 
   return (
     
      <div className='InputContenedor'>
       <img src={logo} alt="logo" className='logonav'></img>
      <Link to='/Dash'>
      <button>Dash</button>
      </Link>
       <Link to='/Personajes'> 
      <button>Personajes</button>
      </Link>
      <Link to='/detail/:id'> 
       </Link>       
       <input className='InputSearch' type='search' onChange={handleChange} />
         <Link to='/Dash'>        
         <button className='ButtonSearch' onClick={()=>{onSearch(id)}}>Agregar</button> 
         </Link>
              <Link to='/'> 
          <button>Salir</button>
          </Link>
          <Link to='/about'> 
           <button>About</button>
      </Link>
         </div>
   ); 
}
