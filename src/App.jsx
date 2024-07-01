import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Component/Home/home";
import Header from "./Component/header/header";
import Footer from "./Component/footer/footer";
import PageNotfount from "./Component/pagenotfount/pageNotfount";
import Moviedetails from "./Component/moviedetails/moviedetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<Moviedetails />} />
            <Route path="*" element={<PageNotfount />} />
          </Routes>
       
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;