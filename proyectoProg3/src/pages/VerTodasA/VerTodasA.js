import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';
import '../VerTodasA/VerTodasA.css'
class VerTodasA extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculasAhora: [],
      filterBy:'',
      favoritos:[]
    };
  }    

  componentDidMount(){
    this.setState({favorito: localStorage.getItem('favoritos') || []})
      const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=93e508f17b507f9418365fe0a4069252"
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              return this.setState({
              peliculasAhora: datos.results,})})
          .catch( err => console.log(err))
        
   }
  

 render() {
  return (
  <>
  
    <h2> Todas las Peliculas recientemente estrenadas</h2>

    <div className='homeLasPeliculasMasValoradas'>
  
{this.state.cargando === false ? (
          <p>Cargando</p>
        ) : (
      this.state.peliculasAhora.map(peliculaAhora =>(
          <Pelicula 
           key={peliculaAhora.id}
           pelicula={peliculaAhora}
           favorito={(peliculaAhora)=> this.handleFavoritos (peliculaAhora)}
           />)
     
          )
      
      )
      
}
  </div>

</>    
  ) 
}


}
export default VerTodasA