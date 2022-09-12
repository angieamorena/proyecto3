import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav (){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <ul className='container-fluid'>
            <li className='nav-item'> 
            <Link className='nav-link active' aria-current="page" to="/">home</Link>
            </li>

            <li className='nav-item'> 
            <Link className='nav-link active'  to="/favoritos">Favoritos</Link>
            </li>

            <li className='nav-item'> 
            <Link className='nav-link active'  to="/verTodas">VerTodas</Link>
            </li>
        </ul>
        </div> 
        
        </nav>
    )
}
    

