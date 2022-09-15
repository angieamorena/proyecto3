import React, { Component } from 'react'
import "./Pelicula.css"
import {Link} from 'react-router-dom' 

export default class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          boton: ''
      }
  }

  render() {

    let {poster_path, title, overview, id} = this.props.pelicula
    const verMas = () => {
        console.log("vermas")}
  
      return (
          <>
              <article  className='item-card'>
              
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/> 
              <h2>{title}</h2>
              <p className='decripcion'>{overview}</p>
  
              <button className="btn btn-primary" onClick={()=>this.props.favorito(this.props.pelicula)}>Favoritos</button>
              <button className="btn btn-warning" onClick={verMas}>Ver Mas</button>
              <Link to={`/detallePelicula/id/${id}`} className="btn btn-warning" >Detalle</Link>

              </article>
          </>
      )
  }
}