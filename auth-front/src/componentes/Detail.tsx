import React from "react"
import {useParams} from "react-router-dom"
import axios from "axios";
import { useState,useEffect } from "react";
import "../Style/Detail.css"
import SearchBar from "./SearchBar";


export default function Detail() {
   const {id}  = useParams(); 
   const [charDetail, setCharDetail] = useState({})
   useEffect(()=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
      if (data.name) {
         setCharDetail(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharDetail({});

   },[id])
   return <div>
      <SearchBar/>
      <div className="Detail">
      <h2>{charDetail.name}</h2>
      <h2>Status {charDetail.status}</h2>
      <h2>Specie {charDetail.species}</h2>
      <h2>Geneero {charDetail.gender}</h2>
      <h2>Origen {charDetail.origin?.name}</h2>
      <div className="contenedortarjetadetail">
      <img  classname="tarjetadetail" src={charDetail.image} alt={charDetail.name}/>
      </div>
      </div>;
      </div>
   
};
