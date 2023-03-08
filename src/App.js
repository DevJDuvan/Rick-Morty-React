// importamos los estilos de boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.scss";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
          <Route path="/" element={<Home />} />
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
    
        </Routes>
      </Router>
    );
  }



  const Home = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
      
// consumo de api
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
    return (
      <div className="App">
        <h1 className="text-center mb-3 Title">Capitulo</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        
      <div className="container">
        <div className="row">
        <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
 <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
          </div>
          </div>
          <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      </div>
    );
  };

  export default App;