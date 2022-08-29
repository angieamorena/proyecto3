import React from 'react'

import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
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
