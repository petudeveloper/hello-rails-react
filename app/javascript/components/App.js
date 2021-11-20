import React from "react"
import Greeting from "./components/Greeting";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import store from "../redux/configurStore";
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<h1>Greetings App</h1>} />
          <Route exact path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
