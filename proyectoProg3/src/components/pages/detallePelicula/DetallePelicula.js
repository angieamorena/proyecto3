import React, { Component } from 'react'

class DetallePelicula extends Component {
   constructor (props){
    super (props)
    this.state ={
        id:this.props.match.params.id, 
        pelicula: {}
    }
   }
ComponentDidMount (){
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}`)
.then(res => res.json())
.then(data => this.setState({
    pelicula:data
}))
.catch(err => console.log(err))
}

  render () {
    return (
<>
    <img src ={this.state.pelicula.image} alt= {this.state.pelicula.name}/>
    <h1>Detalle de {this.state.pelicula.name}</h1>
    <p>Estreno: {this.state.pelicula.estreno}</p>
    <p>Rating: {this.state.pelicula.rating}</p>
    <p>duracion: {this.state.pelicula.duracion}</p>
    <p>sinopsis: {this.state.pelicula.sinopsis}</p>
    <p>genero: {this.state.pelicula.genero}</p>
</>
    )
    
  }
  
}

export default DetallePelicula