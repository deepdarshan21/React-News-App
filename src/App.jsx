import React from "react";
// import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Business from "./components/Business";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Food from "./components/Food";
import Science from "./components/Science";
import SearchResult from "./components/SearchResults";
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
