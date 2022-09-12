import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos'
import VerTodas from './components/pages/verTodas/VerTodas';
import DetallePelicula from './components/pages/detallePelicula/DetallePelicula';

function App() {
  return (
    <>
       <Header titulo="La Matanza" subtitulo="Multimedia"/>        
        {/* <Container /> */}
        
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/verTodas" component={VerTodas}/>
          <Route path="/favoritos" component={Favoritos}/>
          <Route path="/pelicula/id:id" component={DetallePelicula}/> 
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}


export default App;
