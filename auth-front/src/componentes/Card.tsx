import {Link} from "react-router-dom"
import "../Style/card.css"

export default function Card({id,name,status,species,gender,image,origin, onClose}) {
   return (
      <div className="Card">
          <div className='TextCard'>
         <Link to={`/detail/${id}`}>
          <h1>{name}</h1>
          </Link>
          <div className="Contenedorimagentarjeta">
         <img className="imgcard" src={image} alt='imagen' /> 
         </div>
         <h2>Estado: {status} </h2>
         <h2>Especie:{species}</h2>
         <h2>Genero: {gender}</h2> 
         <div className="Contenedorcerrarboton">
         <button className='ButtonCard' onClick={()=> onClose(id)}>X</button>
         </div>
         </div>
        
        
      </div>
   );
}
