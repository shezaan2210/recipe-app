import React from "react";
import Nav from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Recipes from "./Components/Recipes";
import Details from "./Components/Details";
import Create from "./Components/Create";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Update from "./Components/Update";

const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe/:id" element={<Update />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
