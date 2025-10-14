// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
