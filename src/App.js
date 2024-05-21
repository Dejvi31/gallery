import React from "react";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
