import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';

 class Home extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      peliculasPopulares: [],
      peliculasAhora: [],
      filterBy:''
    };
  }    

 componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=93e508f17b507f9418365fe0a4069252"
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            return this.setState({
            peliculasPopulares: datos.results,})})
        .catch( err => console.log(err))

        const url2 = "https://api.themoviedb.org/3/movie/now_playing?api_key=93e508f17b507f9418365fe0a4069252"
        fetch(url2)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                 return this.setState({
                peliculasAhora: datos.results,
            })})
            .catch( err => console.log(err))
      
 }

 agregarMas(){
  const url = ("https://api.themoviedb.org/3/movie/popular?api_key=93e508f17b507f9418365fe0a4069252")
  fetch(url)
  .then((res)=> res.json())
  .then(datos=>{
      let arrayPrevio = this.state.pelicula;
      let arrayActualizado = arrayPrevio.concat(datos.results);
      this.setState({
          peliculasPopulares:arrayActualizado,
          peliculasAhora:arrayActualizado,
      })})}

 filtrarpeliculas(filtro){

    const url = `?name=${filtro}`
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            
            this.setState({peliculasPopulares: datos.results})

        })
        .catch( err => console.log(err))
 }

 handleChange(e){
  this.setState({
    filterBy: e.target.value
  },()=>{
    this.filtrarpeliculas(this.state.filterBy)
  })
 }

  render() {
    return (
    <>

      <form>
        <label >Buscar</label>
        <input
          type="search"
          name="buscar"
          onChange={(e)=>{this.handleChange(e)}}
          value={this.state.filterBy}
        />
      </form>

      <button className='btn btn-primary mb-3 mt-3' onClick={() => this.agregarMas()}>Mas Peliculas</button>
      <div className='card-container'>
{this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.peliculasPopulares.map(peliculaPopular =>(
            <Pelicula key={peliculaPopular.id} pelicula={peliculaPopular}/>)
        )
        
        )
        
}
    </div>

    <div className='card-container'>
{this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
        this.state.peliculasAhora.map(peliculaAhora =>(
            <Pelicula key={peliculaAhora.id} pelicula={peliculaAhora}/>)
        )
        
        )
        
}
    </div>

</>    
    ) 
  }
}
export default Home