/**
 * ReactJS App Developed 
 * On : @ 29/09/2019
 * By : Khalil 
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MoviesList from './component/MoviesList.js'
import Navbar from './component/Navbar.js'
import MovieDetails from './component/MovieDetails.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Route exact path="/" component={MoviesList}/>
        <Route path="/:id" component={MovieDetails}/>


        <div className="container-fluid bg-light border-top border-dark py-4">
          <div className="container">
            <div className="fload-left">
              <span>Assesment from Bjak</span>
            </div>
            <div className="fload-right">
              <span >Developed by Khalil Nazari</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
