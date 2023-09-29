import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchBar from '../componentes/SearchBar'
import {Routes,Route} from "react-router-dom"
import About from '../componentes/About'
import axios from 'axios'
import Personasjes from '../componentes/Personajes'
import Detail from '../componentes/Detail'
import Home from '../views/Home'

function Dash() {
 
  const [characters, setCharacters] =useState([]);

  function onSearch(id) {
     const charaterExist = characters.some((character)=> character.id === parseInt(id));
  if (charaterExist){
     window.alert("esta duplicado");
     return;
  }
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
     });
   }
   
   function onClose(id){
    setCharacters(characters.filter(char => char.id !== id))   
 }

  return (
   <div>
   <SearchBar onSearch={onSearch}/>
   <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/personajes"element={<Personasjes characters={characters}/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/" element={ <Home characters={characters} onClose={onClose} />}/>
    </Routes> 
     
   </div>
  
  )
}

export default Dash