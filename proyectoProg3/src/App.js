import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos'
import DetallePelicula from './pages/detallePelicula/DetallePelicula';
import VerTodasP from './pages/VerTodasP/VerTodasP';
import VerTodasA from './pages/VerTodasA/VerTodasA';

function App() {
  return (
    <>
       <Header titulo="La Matanza" subtitulo="Multimedia"/>        
        
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
     {     <Route path="/favoritos" component={Favoritos}/> }
          <Route path="/pelicula/id:id" component={DetallePelicula}/> 
          <Route path="/pelicula/VerTodasP" component={VerTodasP}/> 
          <Route path="/pelicula/VerTodasA" component={VerTodasA}/> 
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}


export default App;
