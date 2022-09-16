import React, {Component} from 'react'
import './detallePelicula.css'


class DetallePelicula extends Component {
   
    constructor (props){
    super (props)
    this.state ={
        id:this.props.match.params.id, 
        pelis: {}
    }
   }

componentDidMount (){
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=93e508f17b507f9418365fe0a4069252`)
.then(res => res.json())
.then(data =>{
                    console.log(data)
                        return this.setState({
                        pelis: data
                    })
                })
.catch(err => console.log(err))
}

  render () {
    return (
<div className='detalle-card'>
<h1> {this.state.pelis.title}</h1>
    <img src ={`https://image.tmdb.org/t/p/original${this.state.pelis.poster_path}`} alt= {this.state.pelis.title}/>
    <div className='card-body'>
    <p>Estreno: {this.state.pelis.release_date}</p>
    <p>Rating: {this.state.pelis.popularity}</p>
    <p>duracion: {this.state.pelis.runtime}</p>
    <p>sinopsis: {this.state.pelis.overview}</p>
    </div>
   
</div>
    )
    
  }
  
}

export default DetallePelicula