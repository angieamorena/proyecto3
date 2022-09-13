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
        this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) })
    }

    render() {
        return (
            <div className='peliculasFavoritas'>
                {this.state.favoritos.map(peli => {
                    <Pelicula 
                     key= {peli.id}
                     pelicula={peli}
                    />
                })}
            </div>
        )
    }
}

export default Favoritos