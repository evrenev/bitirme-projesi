// src/App.jsx

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CafeList from "./components/CafeList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <CafeList />
      </main>
    </div>
  );
}

export default App;