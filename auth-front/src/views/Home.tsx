import Cards from "../componentes/Cards";
export default function Home ({characters,onClose}){
   
   return(
        <div>
         <h5>BIENVENIDO A LA APP DE PERSONAJES DE RICK AND MORTY BUSCA EL ID DE UN PERSONAJE</h5>
        <Cards characters={characters}  onClose={onClose}/>
        </div>
    
    );
}