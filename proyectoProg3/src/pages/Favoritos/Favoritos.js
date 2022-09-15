import React, { Component } from 'react'
import Pelicula from '../../components/Pelicula/Pelicula';


class Favoritos extends Component {
    constructor() {
        super()
        this.state = {
            favoritos: []
        }
    }

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('favoritos')))
        this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) })
    }

    render() {
        console.log(this.state.favoritos)
        return (
            <div className='peliculasFavoritas'>
                {this.state.favoritos != 0 ? (
                    this.state.favoritos.map(peli => (
                        <Pelicula
                            key={peli.id}
                            pelicula={peli}
                        />
                    ))) : (
                    <h2 className="tituloFavoritos">No tenes peliculas favoritas seleccionadas</h2>
                )}
            </div>
        )
    }
}

export default Favoritos


