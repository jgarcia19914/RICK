import Card from './Card';
import SearchBar from './SearchBar';
import "../Style/Cards.css"

export default function Cards({characters, onClose}) {
   return <div>



   {characters.map(function (charater){
      return(
         
   <div className='Cotenedordetarjetaprincipal'>
   <Card 
   key={charater.id}
   id={charater.id}
   name={charater.name}
   status={charater.status}
   species={charater.species}
   origin={charater.origin.name}
   gender={charater.gender}
   image={charater.image}
   onClose={onClose}
   />
   </div>
      )
    } )}

   </div>; 
}
