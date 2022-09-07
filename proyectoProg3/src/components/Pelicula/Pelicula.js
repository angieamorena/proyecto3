import React from 'react'
import "./Pelicula.css"
import {Link} from 'react-router-dom'

function Pelicula({peliculaPopular}) {
let {image, name, status, gender, id} = peliculaPopular

const eliminar = () => {
  console.log("eliminar")
}

  return (
<div className="character-card mb-4">
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>Status: {status}</p>
      <p>Genero: {gender}</p>
      <div className='d-flex justify-content-end'>
      <button className="btn btn-primary" onClick={()=>{peliculaPopular.favorito(peliculaPopular)}}>Favoritos</button>
        <button className="btn btn-danger" onClick={eliminar}>Eliminar</button>
        <Link to={`/detailMovie/id/${id}`} className="btn btn-warning" >Detalle</Link>
      </div>
</div>
  )
}

export default Pelicula