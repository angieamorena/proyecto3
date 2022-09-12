import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';

class VerTodas extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculasPopulares: [],
      filterBy:'',
      favoritos:[]
    };
  }    

  componentDidMount(){
    this.setState({favorito: localStorage.getItem('favoritos') || []})
      const url = "https://api.themoviedb.org/3/movie/popular?api_key=93e508f17b507f9418365fe0a4069252"
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              return this.setState({
              peliculasPopulares: datos.results,})})
          .catch( err => console.log(err))
        
   }
  

 render() {
  return (
  <>
    
    <h2> Todas las Peliculas Populares</h2>
    
    <div className='card-container'>
{this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
      this.state.peliculasPopulares.map(peliculaPopular =>(
          <Pelicula 
           key={peliculaPopular.id}
           pelicula={peliculaPopular}
           favorito={(peliculaPopular)=> this.handleFavoritos (peliculaPopular)}
           />)
     
          )
      
      )
      
}
  </div>

</>    
  ) 
}


}
export default VerTodas