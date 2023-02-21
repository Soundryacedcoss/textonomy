import "./App.css";
import { useEffect, useState } from "react";
import { Dropdown } from "./Components/Dropdown";
import { LandingPage } from "./Components/LandingPage";
function App() {
  return (
    <div className="App">
      <h2>Taxonomy</h2>
      <LandingPage />
    </div>
  );
}
export default App;
