import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
// import Favoritos from './pages/Favoritos/Favoritos'
// import VerTodas from './components/pages/verTodas/VerTodas';
import DetallePelicula from './pages/detallePelicula/DetallePelicula';
import VerTodasP from './pages/verTodasP/VerTodasP';

function App() {
  return (
    <>
       <Header titulo="La Matanza" subtitulo="Multimedia"/>        
        {/* <Container /> */}
        
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          {/* <Route path="/verTodas" component={VerTodas}/>
          <Route path="/favoritos" component={Favoritos}/> */}
          <Route path="/pelicula/id:id" component={DetallePelicula}/> 
          <Route path="/pelicula/VerTodasP" component={VerTodasP}/> 
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}


export default App;
