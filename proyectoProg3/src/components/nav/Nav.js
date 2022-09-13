import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav (){
    return (
        <nav className="navegador">
        <div className="container-fluid">
        <ul className='container-fluid'>
            <li className='nav-item'> 
            <Link className='nav-link active' aria-current="page" to="/">home</Link>
            </li>

            <li className='nav-item'> 
            <Link className="nav-link "  to="/pelicula/favoritos">Favoritos</Link>
            </li>

            <li className='nav-item'> 
            <Link className='nav-link active'  to="/pelicula/verTodasP">Ver Todas las Populares</Link>
            </li>

            <li className='nav-item'> 
            <Link className='nav-link active'  to="/pelicula/verTodasA">Ver los Estrenos</Link>
            </li>
        </ul>
        </div> 
        
        </nav>
    )
}
    

