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
      filtradas: [],
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

   filtrarPeliculas(filtro){

    if(filtro== ''){
      return 
    }
    else{
  
  
      const url = `https://api.themoviedb.org/3/search/movie/?api_key=93e508f17b507f9418365fe0a4069252&query=${filtro}`
      fetch(url)
          .then((res)=> res.json())
          .then(datos =>{ 
              
              this.setState({filtradas: datos.results})
  
          })
          .catch( err => console.log(err))
        }
   }
  
   handleChange(e){
    this.setState({
      filterBy: e.target.value
    },()=>{
      this.filtrarPeliculas(this.state.filterBy)
    })
   }

 render() {
  return (
  <>
   <div className='Contenedor'> 
      <form className='buscador'>
        <label >Buscar</label>
        <input
          type="search"
          name="buscar"
          onChange={(e)=>{this.handleChange(e)}}
          value={this.state.filterBy}
        />
      </form>
      </div>

      {this.state.filterBy==""?<>
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

</>   :  <>   <div className='card-container'>
      {this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.filtradas.map(filtrada =>(
            <Pelicula 
        
             key={filtrada.id}
             pelicula={filtrada}
             favorito={(filtrada)=> this.handleFavoritos (filtrada)}
             />)
       
            )
        
        )
        
          }
    </div> 

    </>}


</>    
  ) 
}


}
export default VerTodasA