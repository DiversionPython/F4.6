import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Kind from './Kind.js';
import Variety from'./Variety.js';
import Dish from'./Dish.js';
import Recipe from'./Recipe.js';


import './App.css';


function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Kind />} />
            <Route path="/variety" element={<Variety />} />
            <Route path="/dish" element={<Dish />} />
            <Route path="/recipe/:id" element={<Recipe />} />
  
           
          </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
