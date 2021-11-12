import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <div className="container layout-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
