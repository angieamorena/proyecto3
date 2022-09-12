import React from 'react'
import "./Pelicula.css"
import {Link} from 'react-router-dom'

function Pelicula({pelicula}) {
  console.log(pelicula)
let {poster_path, title, overview, id} = pelicula


const verMas = () => {
  console.log("verMas")
  //<p>Descripción {overview} </p>
}

  return (
  <div className="character-card mb-4">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/>
        <h4>{title}</h4>
        <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={()=>{pelicula.favorito(pelicula)}}>Favoritos</button>
          <button className="btn btn-warning" onClick={verMas}>Ver Mas</button>
          <Link to={`/pelicula/id/${id}`} className="btn btn-warning" >Detalle</Link>
        </div>
  </div>
  )
}

export default Pelicula

