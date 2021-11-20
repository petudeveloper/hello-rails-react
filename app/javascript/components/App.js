import React from "react"
import Greeting from "./components/Greeting";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<h1>Greetings App</h1>} />
        <Route exact path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App
