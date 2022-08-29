import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <p>hola</p>
      <Header titulo="La Matanza" subtitulo="Multimedia"/>        
        {/* <Container /> */}
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          
          {/* <Route path="/about" component={Characters} />  
          <Route path="/characters/id/:id" component={CharacterDetails} />
          <Route path="/contact" component={Contact}/> */}

          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
