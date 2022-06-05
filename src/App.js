import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import "./App.css";
import { Characters } from "./components/Characters/Characters";
import { CharacterDetail } from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:charId" element={<CharacterDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
