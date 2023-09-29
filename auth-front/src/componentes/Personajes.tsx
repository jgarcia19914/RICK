import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "../Style/Personajes.css"


const URL ="https://rickandmortyapi.com/api/character";


export default function Personasjes() {

  const [characters, setCharacters] = useState([])
  const fetchCharacter =(URL)=>{
   fetch(URL)
   .then(response => response.json())
   .then(data => {
     setCharacters(data.results)
    })
    
   .catch(error => console.log(error));
 };

 useEffect(() => {
   fetchCharacter(URL);
 }, []);



  return (
    <div>
    <div>
    <SearchBar/>
    </div>
    <div className='contenedor1'>
    {
        characters.map((item,index)=>(
            <div key={index} className='col'>
            <div className='cardtarjeta'> 
                  <div className="Contenedorimagentarjeta"> 
                 <img className="imegentarjeta" src={item.image} alt='imagenterjeta'/>
                 </div>
                 <h1 >{item.name}</h1>
                 <h2>Genero  { item.gender}</h2>
                 <h2>Status {item.status}</h2>
                 <p>Especie: {item.species}</p>
                 <p>Location: {item.location.name}</p>
               </div>
                              
                </div>
        ))
    }
</div>
    </div>
  )
}

