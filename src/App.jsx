import React from "react";
// import NavBar from "./components/NavBar"
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";
import Sports from "./components/pages/Sports";
import Technology from "./components/pages/Technology";
import Food from "./components/pages/Food";
import Science from "./components/pages/Science";
import SearchResult from "./components/pages/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Routes} from "react-router-dom"
// import { Route } from "react-router";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div>
            {/* <NavBar/> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/science" element={<Science />} />
                    <Route path="/search=:id" element={<SearchResult/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
