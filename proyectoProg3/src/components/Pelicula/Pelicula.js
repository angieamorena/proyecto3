import React/*, { Component }*/ from 'react'
import "./Pelicula.css"
import {Link} from 'react-router-dom' 

function Pelicula (props){
    let {poster_path, title, overview, id} = props.pelicula

{/*class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          boton: ''
      }
  }



 // render() {

    //let {poster_path, title, overview, id} = props.pelicula
    //const verMas = () => {
       // console.log("vermas")}
    
*/}
      return (
          <>
              <article  className='item-card'>
              
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/> 
              <h2>{title}</h2>
              <p className='decripcion'>{overview}</p>

              <div className='d-flex justify-content-end'>
              <button className="btn btn-primary" onClick={()=>{props.favorito(props.pelicula)}}>Favoritos</button>
              {/*<button className="btn btn-warning" onClick={verMas}>Ver Mas</button>*/}
              <Link to={`/Home/id/:${id}`} className="btn btn-warning" >Ver Detalle</Link>
              </div>      

              </article>
          </>
      )
 }
//}

export default Pelicula