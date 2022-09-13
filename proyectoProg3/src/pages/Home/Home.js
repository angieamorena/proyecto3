import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pelicula from '../../components/Pelicula/Pelicula';
import './Home.css';

 class Home extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculasPopulares: [],
      peliculasAhora: [],
      filtradas: [],
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
            peliculasPopulares: datos.results.slice(0,3)})})
        .catch( err => console.log(err))

        const url2 = "https://api.themoviedb.org/3/movie/now_playing?api_key=93e508f17b507f9418365fe0a4069252"
        fetch(url2)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                 return this.setState({
                peliculasAhora: datos.results.slice(0,3)
            })})
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

 handleFavorito(pelicula){

  console.log(this.state.favoritos)
  if (this.state.favoritos.some(fav => pelicula.id === fav.id)){
  console.log("verdadero")
 }else{
this.setState(
  {favoritos:[...this.state.favoritos, pelicula]}, ()=>
{ localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
})
 }
}
 
  render() {
    return (
    <>
      <div className='Contenedor'> 
      <form clasName='buscador'>
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
      <Link to={`/pelicula/VerTodasP`} className="tituloPelicula" >Peliculas Populares</Link>
      
      <div className='homePeliculasPopulares'>
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
    <Link to={`/pelicula/VerTodasA`} className="tituloPelicula" >Lo ultimo de Peliculas</Link>
    <div className='homeLasPeliculasMasValoradas'>
{this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.peliculasAhora.map(peliculaAhora =>(
            <Pelicula key={peliculaAhora.id} pelicula={peliculaAhora}/>)
        )
        
        )
        
}
    </div>
    </>:<>   <div className='card-container'>
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
export default Home