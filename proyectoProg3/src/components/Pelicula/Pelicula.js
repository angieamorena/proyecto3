import React, { Component } from 'react'
import "./Pelicula.css"
import {Link} from 'react-router-dom' 

export default class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          boton: '',
          ver : true
      }
  }

  render() {

    let {poster_path, title, overview, id} = this.props.pelicula
   
      return (
          <>
              <article  className='item-card'>
              
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/> 
              <h2>{title}</h2>
              <p className={this.state.ver ?  `decripcionOculta` : `descripcion`}>{overview}</p>
              <button className="btn btn-primary" onClick={()=>this.props.favorito(this.props.pelicula)}>Favoritos</button>
              <button className="btn btn-warning" onClick={()=> this.setState({ver:!this.state.ver})}>{this.state.ver ?  `Ver Mas` : `Ver Menos`}</button>
              <Link to={`/detallePelicula/id/${id}`} className="btn btn-warning" >Detalle</Link>

              </article>
          </>
      )
  }
}