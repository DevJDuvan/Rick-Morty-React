// importamos los estilos de boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
    return (
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }



  const Home = () => {
   
    return (
      <div className="App">
        <h1 className="text-center mb-3">Palabra clave</h1>
     
      </div>
    );
  };

  export default App;