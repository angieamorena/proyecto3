import React, { Component } from 'react'
import Pelicula from '../../Pelicula/Pelicula'

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
            <>
                {this.state.favoritos.map(peli => {
                    <Pelicula 
                     key= {peli.id}
                     pelicula={peli}
                    />
                })}
            </>
        )
    }
}

export default Favoritos