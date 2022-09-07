import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos'

function App() {
  return (
    <>
       <Header titulo="La Matanza" subtitulo="Multimedia"/>        
        {/* <Container /> */}
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/favoritos" component={Favoritos}></Route>
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}


export default App;
