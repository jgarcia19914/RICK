import SearchBar from "./SearchBar";
import "../Style/About.css"
import HenryLogo from "../img/HenryLogo.webp"


const About =()=> {
    return(
        <div>
        <SearchBar/>
        <div className="About">
        <h5>JONATAN GARCIA ROSERO</h5>
        <h5>PROYECTO INTEGRADOR</h5> 
        <img src={HenryLogo} alt="logo_henry"></img>
        <h2>HENRY</h2>       
        </div>
        </div>
    )
};

export default About;